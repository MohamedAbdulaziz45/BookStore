using AutoMapper;
using BookStore.Application.Payments.Dtos;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Payments.Queries.GetPaymentById;

internal class GetPaymentByIdQueryHandler(ILogger<GetPaymentByIdQueryHandler> logger, IMapper mapper, IPaymentsRepository repository) : IRequestHandler<GetPaymentByIdQuery, PaymentDto>
{
    public async Task<PaymentDto> Handle(GetPaymentByIdQuery request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Getting Payment {request.PaymentId}");
        var entity = await repository.GetByIdAsync(request.PaymentId);
        
        if (entity == null)
            throw new NotFoundException(nameof(Payment), request.PaymentId.ToString());
            
        return mapper.Map<PaymentDto>(entity);
    }
}
