using API.Data;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string connString;
if (builder.Environment.IsDevelopment())
  connString = builder.Configuration.GetConnectionString("DefaultConnection");
else
{
  // Use connection string provided at runtime by FlyIO.
  var connUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

  // Parse connection URL to connection string for Npgsql
  connUrl = connUrl.Replace("postgres://", string.Empty);
  var pgUserPass = connUrl.Split("@")[0];
  var pgHostPortDb = connUrl.Split("@")[1];
  var pgHostPort = pgHostPortDb.Split("/")[0];
  var pgDb = pgHostPortDb.Split("/")[1];
  var pgUser = pgUserPass.Split(":")[0];
  var pgPass = pgUserPass.Split(":")[1];
  var pgHost = pgHostPort.Split(":")[0];
  var pgPort = pgHostPort.Split(":")[1];
  var updatedHost = pgHost.Replace("flycast", "internal");

connString = $"Server={updatedHost};Port={pgPort};User Id={pgUser};Password={pgPass};Database={pgDb};";
}
builder.Services.AddDbContext<StoreContext>(opt =>
{
  opt.UseNpgsql(connString);
});


builder.Services.AddCors();

var app = builder.Build();

app.UseMiddleware<ExeptionMiddleware>();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(opt =>
{
  opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:3000");
});

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToController("Index", "Fallback");

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
  context.Database.Migrate();
  DbInitializer.Initialize(context);
}
catch (Exception ex)
{
  logger.LogError(ex, "A problem occured during migration");
}

app.Run();
