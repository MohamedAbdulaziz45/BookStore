using AutoMapper;
using BookStore.Application.Shippings.Dtos;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace BookStore.Application.Shippings.Queries.GetAllShippings;

internal class GetAllShippingsQueryHandler(ILogger<GetAllShippingsQueryHandler> logger,
IMapper mapper,
IShippingsRepository repository) : IRequestHandler<GetAllShippingsQuery, IEnumerable<ShippingDto>>
{
    public async Task<IEnumerable<ShippingDto>> Handle(GetAllShippingsQuery request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Getting all Shippings");
        var entities = await repository.GetAllAsync();
        return mapper.Map<IEnumerable<ShippingDto>>(entities);
    }
}
