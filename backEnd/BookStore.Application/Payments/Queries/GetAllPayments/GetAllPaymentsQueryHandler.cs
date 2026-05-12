using AutoMapper;
using BookStore.Application.Payments.Dtos;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace BookStore.Application.Payments.Queries.GetAllPayments;

internal class GetAllPaymentsQueryHandler(ILogger<GetAllPaymentsQueryHandler> logger, IMapper mapper, IPaymentsRepository repository) : IRequestHandler<GetAllPaymentsQuery, IEnumerable<PaymentDto>>
{
    public async Task<IEnumerable<PaymentDto>> Handle(GetAllPaymentsQuery request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Getting all Payments");
        var entities = await repository.GetAllAsync();
        return mapper.Map<IEnumerable<PaymentDto>>(entities);
    }
}
