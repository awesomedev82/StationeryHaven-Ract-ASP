using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class Orders : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BuyerId = table.Column<string>(type: "TEXT", nullable: true),
                    ShippingAddressIsRequired = table.Column<bool>(name: "ShippingAddress_IsRequired", type: "INTEGER", nullable: true),
                    ShippingAddressFullName = table.Column<string>(name: "ShippingAddress_FullName", type: "TEXT", nullable: true),
                    ShippingAddressAddress1 = table.Column<string>(name: "ShippingAddress_Address1", type: "TEXT", nullable: true),
                    ShippingAddressAddress2 = table.Column<string>(name: "ShippingAddress_Address2", type: "TEXT", nullable: true),
                    ShippingAddressCity = table.Column<string>(name: "ShippingAddress_City", type: "TEXT", nullable: true),
                    ShippingAddressState = table.Column<string>(name: "ShippingAddress_State", type: "TEXT", nullable: true),
                    ShippingAddressZip = table.Column<string>(name: "ShippingAddress_Zip", type: "TEXT", nullable: true),
                    ShippingAddressCountry = table.Column<string>(name: "ShippingAddress_Country", type: "TEXT", nullable: true),
                    OrderDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Subtotal = table.Column<long>(type: "INTEGER", nullable: false),
                    DeliveryFee = table.Column<long>(type: "INTEGER", nullable: false),
                    OrderStatus = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OrderItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ItemOrderedProductId = table.Column<int>(name: "ItemOrdered_ProductId", type: "INTEGER", nullable: true),
                    ItemOrderedName = table.Column<string>(name: "ItemOrdered_Name", type: "TEXT", nullable: true),
                    ItemOrderedImageUrl = table.Column<string>(name: "ItemOrdered_ImageUrl", type: "TEXT", nullable: true),
                    Price = table.Column<long>(type: "INTEGER", nullable: false),
                    Quantity = table.Column<int>(type: "INTEGER", nullable: false),
                    OrderId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItem_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderItem_OrderId",
                table: "OrderItem",
                column: "OrderId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderItem");

            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
