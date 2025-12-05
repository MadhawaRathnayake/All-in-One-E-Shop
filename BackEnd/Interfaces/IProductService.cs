using Entities;
using CommonResponse;

namespace ApplicationInterfaces
{
    public interface IProductService
    {
        Task<CustomeResponse> SaveProduct(ProductModel productModel);
        Task<CustomeResponse> GetAllProduct();
    }
}
