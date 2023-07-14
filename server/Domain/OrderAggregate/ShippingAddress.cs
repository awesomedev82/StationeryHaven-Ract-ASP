using Microsoft.EntityFrameworkCore;

namespace server.Domain.OrderAggregate
{
  [Owned]
  public class ShippingAddress : Address
  {
    public bool IsRequired { get; set; } = true;
  }
}