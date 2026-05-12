using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Customers.Commands.DeleteCustomer;

internal class DeleteCustomerCommandHandler(ILogger<DeleteCustomerCommandHandler> logger, ICustomersRepository repository) : IRequestHandler<DeleteCustomerCommand, bool>
{
    public async Task<bool> Handle(DeleteCustomerCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Deleting Customer {request.CustomerId}");
        
        var existingEntity = await repository.GetByIdAsync(request.CustomerId);
        if (existingEntity == null)
            throw new NotFoundException(nameof(Customer), request.CustomerId.ToString());

        return await repository.DeleteAsync(request.CustomerId);
    }
}
