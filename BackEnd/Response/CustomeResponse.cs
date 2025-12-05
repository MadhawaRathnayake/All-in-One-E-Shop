namespace CommonResponse
{
    public class CustomeResponse : ICustomResponse
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
        public CustomeResponse GenerateResponse(int statusCode, string message)
        {
            this.StatusCode = statusCode;
            this.Message = message;

            return this;
        }

        public CustomeResponse GenerateResponse(int statusCode, string message, object data)
        {
            this.StatusCode = statusCode;
            this.Message = message;
            this.Data = data;

            return this;
        }

    }
}
