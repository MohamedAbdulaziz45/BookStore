using AutoMapper;
using BookStore.Application.Customers.Dtos;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace BookStore.Application.Customers.Queries.GetAllCustomers;

internal class GetAllCustomersQueryHandler(ILogger<GetAllCustomersQueryHandler> logger, IMapper mapper, ICustomersRepository repository) : IRequestHandler<GetAllCustomersQuery, IEnumerable<CustomerDto>>
{
    public async Task<IEnumerable<CustomerDto>> Handle(GetAllCustomersQuery request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Getting all Customers");
        var entities = await repository.GetAllAsync();
        return mapper.Map<IEnumerable<CustomerDto>>(entities);
    }
}
