using server.Domain.OrderAggregate;

namespace server.DTOs
{
  public class CreateOrderDto
  {
    public ShippingAddress ShippingAddress { get; set; }
  }
}