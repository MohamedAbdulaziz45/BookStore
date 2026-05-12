using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Orders.Commands.UpdateOrder;

internal class UpdateOrderCommandHandler(ILogger<UpdateOrderCommandHandler> logger, IMapper mapper, IOrdersRepository repository) : IRequestHandler<UpdateOrderCommand, bool>
{
    public async Task<bool> Handle(UpdateOrderCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Updating Order {request.OrderId}");
        
        var existingEntity = await repository.GetByIdAsync(request.OrderId);
        if (existingEntity == null)
            throw new NotFoundException(nameof(Order), request.OrderId.ToString());

        mapper.Map(request, existingEntity);
        return await repository.UpdateAsync(existingEntity);
    }
}
