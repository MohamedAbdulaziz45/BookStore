using AutoMapper;
using BookStore.Application.Shippings.Dtos;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Shippings.Queries.GetShippingById;

internal class GetShippingByIdQueryHandler(ILogger<GetShippingByIdQueryHandler> logger, IMapper mapper, IShippingsRepository repository) : IRequestHandler<GetShippingByIdQuery, ShippingDto>
{
    public async Task<ShippingDto> Handle(GetShippingByIdQuery request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Getting Shipping {request.ShippingId}");
        var entity = await repository.GetByIdAsync(request.ShippingId);
        
        if (entity == null)
            throw new NotFoundException(nameof(Shipping), request.ShippingId.ToString());
            
        return mapper.Map<ShippingDto>(entity);
    }
}
