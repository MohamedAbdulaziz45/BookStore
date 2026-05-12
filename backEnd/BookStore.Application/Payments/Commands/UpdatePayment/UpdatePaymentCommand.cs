using MediatR;

namespace BookStore.Application.Payments.Commands.UpdatePayment;

public class UpdatePaymentCommand : IRequest<bool>
{
    public int PaymentId { get; set; } = default;
    public decimal Amount { get; set; } = default;
    public string PaymentMethod { get; set; } = default!;
    public DateTime TransactionDate { get; set; } = default;
    public int OrderId { get; set; } = default;
}
