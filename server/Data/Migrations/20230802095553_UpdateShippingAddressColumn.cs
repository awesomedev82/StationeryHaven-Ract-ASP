using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateShippingAddressColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ShippingAddress_IsRequired",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "ShippingAddress_Address1",
                table: "Orders",
                newName: "ShippingAddress_EmailAddress");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ShippingAddress_EmailAddress",
                table: "Orders",
                newName: "ShippingAddress_Address1");

            migrationBuilder.AddColumn<bool>(
                name: "ShippingAddress_IsRequired",
                table: "Orders",
                type: "INTEGER",
                nullable: true);
        }
    }
}
