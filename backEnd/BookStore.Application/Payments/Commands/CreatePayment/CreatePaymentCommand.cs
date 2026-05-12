using MediatR;

namespace BookStore.Application.Payments.Commands.CreatePayment;

public class CreatePaymentCommand : IRequest<int>
{
    public decimal Amount { get; set; } = default;
    public string PaymentMethod { get; set; } = default!;
    public DateTime TransactionDate { get; set; } = default;
    public int OrderId { get; set; } = default;
}
