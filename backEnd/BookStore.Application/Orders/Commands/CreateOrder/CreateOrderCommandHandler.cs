using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Orders.Commands.CreateOrder;

internal class CreateOrderCommandHandler(ILogger<CreateOrderCommandHandler> logger, IMapper mapper, IOrdersRepository repository) : IRequestHandler<CreateOrderCommand, int>
{
    public async Task<int> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Creating a new Order");
        var entity = mapper.Map<Order>(request);
        var id = await repository.CreateAsync(entity);
        return id;
    }
}
