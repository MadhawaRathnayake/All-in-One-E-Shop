namespace Entities
{
    public class ProductModel
    {
        public int ProdID { get; set; }
        public string ProdName { get; set; }
        public string? ProdDescription { get; set; }
        public int ProdQty { get; set; }
        public decimal ProdPrice { get; set; }
        public Boolean IsActive { get; set; }
        public int CreatedBy { get; set; }
    }
}
