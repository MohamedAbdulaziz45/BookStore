using AutoMapper;
using BookStore.Application.Customers.Dtos;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Customers.Queries.GetCustomerById;

internal class GetCustomerByIdQueryHandler(ILogger<GetCustomerByIdQueryHandler> logger, IMapper mapper, ICustomersRepository repository) : IRequestHandler<GetCustomerByIdQuery, CustomerDto>
{
    public async Task<CustomerDto> Handle(GetCustomerByIdQuery request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Getting Customer {request.CustomerId}");
        var entity = await repository.GetByIdAsync(request.CustomerId);
        
        if (entity == null)
            throw new NotFoundException(nameof(Customer), request.CustomerId.ToString());
            
        return mapper.Map<CustomerDto>(entity);
    }
}
