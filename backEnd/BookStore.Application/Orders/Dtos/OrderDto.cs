namespace BookStore.Application.Orders.Dtos;

public class OrderDto
{
    public int OrderId { get; set; } = default;
    public DateTime OrderDate { get; set; } = default;
    public decimal TotalAmount { get; set; } = default;
    public int Status { get; set; } = default;
    public int CustomerId { get; set; } = default;
}
