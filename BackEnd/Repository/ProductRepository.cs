using ApplicationInterfaces;
using CommonResponse;
using Entities;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext context;
        private readonly ICustomResponse customResponse;

        public ProductRepository(ApplicationDbContext context, ICustomResponse customResponse)
        {
            this.context = context;
            this.customResponse = customResponse;
        }

        public async Task<CustomeResponse> GetAllProducts()
        {
            try
            {
                var products = await this.context.Product.ToListAsync();

                if (products == null || products.Count == 0)
                {
                    return new CustomeResponse().GenerateResponse(404, "No products found");
                }

                return new CustomeResponse().GenerateResponse(200, "Products retrieved successfully", products);
            }

            catch (Exception ex)
            {
                return new CustomeResponse().GenerateResponse(500, $"Error: {ex.Message}");
            }
        }

        public async Task<CustomeResponse> AddProduct(ProductModel productModel)
        {
            try
            {
                productModel.IsActive = true;
                this.context.Product.Add(productModel);
                await this.context.SaveChangesAsync();
                return customResponse.GenerateResponse(200, "Product saved successfully");
            }
            catch (Exception ex)
            {
                return customResponse.GenerateResponse(500, $"Error: {ex.Message}");
            }
        }
    }
}