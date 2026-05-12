using BookStore.Application.Payments.Dtos;
using MediatR;

namespace BookStore.Application.Payments.Queries.GetPaymentById;

public class GetPaymentByIdQuery(int id) : IRequest<PaymentDto>
{
    public int PaymentId { get; } = id;
}
