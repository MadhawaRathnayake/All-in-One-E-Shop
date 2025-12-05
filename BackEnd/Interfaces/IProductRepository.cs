using CommonResponse;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationInterfaces
{
    public interface IProductRepository
    {
        Task<CustomeResponse> GetAllProducts();
        Task<CustomeResponse> AddProduct(ProductModel productModel);
    }
}
