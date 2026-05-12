using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Payments.Commands.UpdatePayment;

internal class UpdatePaymentCommandHandler(ILogger<UpdatePaymentCommandHandler> logger, IMapper mapper, IPaymentsRepository repository) : IRequestHandler<UpdatePaymentCommand, bool>
{
    public async Task<bool> Handle(UpdatePaymentCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Updating Payment {request.PaymentId}");
        
        var existingEntity = await repository.GetByIdAsync(request.PaymentId);
        if (existingEntity == null)
            throw new NotFoundException(nameof(Payment), request.PaymentId.ToString());

        mapper.Map(request, existingEntity);
        return await repository.UpdateAsync(existingEntity);
    }
}
