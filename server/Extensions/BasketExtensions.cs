

using API.Domain;
using Microsoft.EntityFrameworkCore;

namespace server.Extensions
{
 public static class BasketExtensions
    {
        public static IQueryable<Basket> RetrieveBasketWithItems(this IQueryable<Basket> query, string buyerId)
        {
         return query.Include(b => b.Items).ThenInclude(i => i.Product).Where(b=> b.BuyerId == buyerId);
        }
    }
}