using API.Domain;

namespace API.Data
{
  public static class DbInitializer
  {
    public static void Initialize(StoreContext context)
    {
      if (context.Products.Any()) return;

      var products = new List<Product>
      {
         new Product
{
    Name = "Blue Ballpoint Pen",
    Description = "A sleek blue ballpoint pen for smooth writing.",
    Price = 500,
    ImageUrl = "/images/products/blue-pen.png",
    Brand = "Parker",
    Type = "Pen",
    QuantityInStock = 100
},
new Product
{
    Name = "Black Rollerball Pen",
    Description = "A professional black rollerball pen for precise writing.",
    Price = 800,
    ImageUrl = "/images/products/black-pen.png",
    Brand = "Montblanc",
    Type = "Pen",
    QuantityInStock = 80
},
new Product
{
    Name = "Executive Fountain Pen",
    Description = "An elegant fountain pen with a gold-plated nib.",
    Price = 1500,
    ImageUrl = "/images/products/fountain-pen.png",
    Brand = "Waterman",
    Type = "Pen",
    QuantityInStock = 60
},
new Product
{
    Name = "Mechanical Pencil Set",
    Description = "A set of mechanical pencils in various lead sizes.",
    Price = 1200,
    ImageUrl = "/images/products/mechanical-pencil-set.png",
    Brand = "Rotring",
    Type = "Pencil",
    QuantityInStock = 40
},
new Product
{
    Name = "Highlighter Pack",
    Description = "A pack of vibrant highlighters for emphasizing text.",
    Price = 600,
    ImageUrl = "/images/products/highlighter-pack.png",
    Brand = "Stabilo",
    Type = "Highlighter",
    QuantityInStock = 70
},
new Product
{
    Name = "Stainless Steel Scissors",
    Description = "A pair of durable stainless steel scissors for cutting paper and fabric.",
    Price = 800,
    ImageUrl = "/images/products/scissors.png",
    Brand = "Fiskars",
    Type = "Scissors",
    QuantityInStock = 30
},
new Product
{
    Name = "Desktop Stapler",
    Description = "A sturdy desktop stapler for fastening papers together.",
    Price = 1000,
    ImageUrl = "/images/products/stapler.png",
    Brand = "Swingline",
    Type = "Stapler",
    QuantityInStock = 50
},
new Product
{
    Name = "Whiteboard Marker Set",
    Description = "A set of colorful whiteboard markers for writing on whiteboards.",
    Price = 700,
    ImageUrl = "/images/products/whiteboard-markers.png",
    Brand = "Expo",
    Type = "Marker",
    QuantityInStock = 60
},
new Product
{
    Name = "Document File Organizer",
    Description = "A portable document file organizer with multiple compartments.",
    Price = 1500,
    ImageUrl = "/images/products/file-organizer.png",
    Brand = "Smead",
    Type = "Organizer",
    QuantityInStock = 40
},
new Product
{
    Name = "Desk Organizer Caddy",
    Description = "A compact desk organizer caddy for keeping stationery items organized.",
    Price = 900,
    ImageUrl = "/images/products/desk-organizer.png",
    Brand = "Rolodex",
    Type = "Organizer",
    QuantityInStock = 50
},
new Product
{
    Name = "Laminating Machine",
    Description = "A laminating machine for preserving important documents.",
    Price = 3500,
    ImageUrl = "/images/products/laminating-machine.png",
    Brand = "Fellowes",
    Type = "Machine",
    QuantityInStock = 20
},
new Product
{
    Name = "Paper Shredder",
    Description = "A heavy-duty paper shredder for secure document disposal.",
    Price = 2500,
    ImageUrl = "/images/products/paper-shredder.png",
    Brand = "Fellowes",
    Type = "Machine",
    QuantityInStock = 15
},
      };

      foreach (var product in products)
      {
        context.Products.Add(product);
      }

      context.SaveChanges();
    }
  }
}