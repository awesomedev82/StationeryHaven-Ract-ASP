namespace server.Domain.OrderAggregate
{
  public class OrderItems
  {
    public int Id { get; set; }
    public ProductItemOrdered ItemOrdered { get; set; }
    public long Price { get; set; }
    public int Quantity { get; set; }
  }
}