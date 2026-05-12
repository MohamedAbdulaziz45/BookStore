using BookStore.Application.Payments.Dtos;
using MediatR;
using System.Collections.Generic;

namespace BookStore.Application.Payments.Queries.GetAllPayments;

public class GetAllPaymentsQuery : IRequest<IEnumerable<PaymentDto>>
{
}
