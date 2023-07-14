using API.Controllers;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Domain.OrderAggregate;
using server.DTOs;
using server.Extensions;

namespace server.Controllers
{
  public class OrdersController : BaseApiController
  {
    private readonly StoreContext _context;

    public OrdersController(StoreContext context)
    {
      _context = context;

    }

    [HttpGet]
    public async Task<ActionResult<List<OrderDto>>> GetOrders()
    {
      return await _context.Orders
        .ProjectOrderToOrderDto()
        .ToListAsync();
    }

    [HttpGet("{id}", Name = "GetOrder")]
    public async Task<ActionResult<OrderDto>> GetOrder(int id)
    {
      return await _context.Orders
        .ProjectOrderToOrderDto()
        .Where(x => x.Id == id)
        .FirstOrDefaultAsync();
    }

    [HttpPost]
    public async Task<ActionResult<int>> CreateOrder(CreateOrderDto orderDto)
    {
      var buyerId = Request.Cookies["buyerId"];

      var basket = await _context.Baskets
      .RetrieveBasketWithItems(buyerId)
      .FirstOrDefaultAsync();

      if (basket == null) return BadRequest(new ProblemDetails { Title = "Could not locate basket" });

      var items = new List<OrderItem>();

      foreach (var item in basket.Items)
      {
        var productItem = await _context.Products.FindAsync(item.ProductId);
        var itemOrdered = new ProductItemOrdered
        {
          ProductId = productItem.Id,
          Name = productItem.Name,
          ImageUrl = productItem.ImageUrl,
        };
        var orderItem = new OrderItem
        {
          ItemOrdered = itemOrdered,
          Price = productItem.Price,
          Quantity = item.Quantity
        };
        items.Add(orderItem);
        productItem.QuantityInStock -= item.Quantity;
      }

      var subtotal = items.Sum(item => item.Price * item.Quantity);
      var deliveryFee = subtotal > 10000 ? 0 : 500;

      var order = new Order
      {
        OrderItems = items,
        BuyerId = buyerId,
        ShippingAddress = orderDto.ShippingAddress,
        Subtotal = subtotal,
        DeliveryFee = deliveryFee
      };

      _context.Orders.Add(order);
      _context.Baskets.Remove(basket);

      var result = await _context.SaveChangesAsync() > 0;

      if (result) return CreatedAtRoute("GetOrder", new { id = order.Id }, order.Id);

      return BadRequest("Problem Creating Order");
    }
  }
}