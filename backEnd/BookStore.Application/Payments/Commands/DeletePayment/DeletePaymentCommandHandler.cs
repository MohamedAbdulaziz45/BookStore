using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Payments.Commands.DeletePayment;

internal class DeletePaymentCommandHandler(ILogger<DeletePaymentCommandHandler> logger, IPaymentsRepository repository) : IRequestHandler<DeletePaymentCommand, bool>
{
    public async Task<bool> Handle(DeletePaymentCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Deleting Payment {request.PaymentId}");
        
        var existingEntity = await repository.GetByIdAsync(request.PaymentId);
        if (existingEntity == null)
            throw new NotFoundException(nameof(Payment), request.PaymentId.ToString());

        return await repository.DeleteAsync(request.PaymentId);
    }
}
