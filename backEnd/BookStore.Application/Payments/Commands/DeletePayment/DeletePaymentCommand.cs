using MediatR;

namespace BookStore.Application.Payments.Commands.DeletePayment;

public class DeletePaymentCommand(int id) : IRequest<bool>
{
    public int PaymentId { get; } = id;
}
