using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ProductModel> Product { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ProductModel>(entity =>
            {
                entity.ToTable("Product", "Inventory");
                entity.HasKey(e => e.ProdID);
                entity.Property(e => e.ProdName).IsRequired().HasMaxLength(200);
                entity.Property(e => e.ProdDescription).HasMaxLength(500);
                entity.Property(e => e.ProdPrice).HasColumnType("decimal(18,2)");
                entity.Property(e => e.ProdQty).IsRequired();
                entity.Property(e => e.IsActive).IsRequired();
                entity.Property(e => e.CreatedBy).IsRequired();
            });
        }
    }
}
