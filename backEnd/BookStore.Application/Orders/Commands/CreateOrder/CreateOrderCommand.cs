using MediatR;

namespace BookStore.Application.Orders.Commands.CreateOrder;

public class CreateOrderCommand : IRequest<int>
{
    public DateTime OrderDate { get; set; } = default;
    public decimal TotalAmount { get; set; } = default;
    public int Status { get; set; } = default;
    public int CustomerId { get; set; } = default;
}
