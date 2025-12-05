using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonResponse
{
    public interface ICustomResponse
    {
        CustomeResponse GenerateResponse(int statusCode, string message);
    }
}
