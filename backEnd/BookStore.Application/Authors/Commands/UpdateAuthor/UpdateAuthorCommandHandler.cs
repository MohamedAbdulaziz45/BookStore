using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Authors.Commands.UpdateAuthor;

internal class UpdateAuthorCommandHandler(ILogger<UpdateAuthorCommandHandler> logger, IMapper mapper, IAuthorsRepository repository) : IRequestHandler<UpdateAuthorCommand, bool>
{
    public async Task<bool> Handle(UpdateAuthorCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Updating Author {request.AuthorId}");
        
        var existingEntity = await repository.GetByIdAsync(request.AuthorId);
        if (existingEntity == null)
            throw new NotFoundException(nameof(Author), request.AuthorId.ToString());

        mapper.Map(request, existingEntity);
        return await repository.UpdateAsync(existingEntity);
    }
}
