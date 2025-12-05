using ApplicationInterfaces;
using CommonResponse;
using Entities;

namespace Service
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository productRepository;

        public ProductService(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        public async Task<CustomeResponse> GetAllProduct()
        {
            return await productRepository.GetAllProducts();
        }

        public async Task<CustomeResponse> SaveProduct(ProductModel productModel)
        {
            return await productRepository.AddProduct(productModel);
        }
    }
}
