
using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Authors.Commands.CreateAuthor;

internal class CreateAuthorCommandHandler(
ILogger<CreateAuthorCommandHandler> logger, 
IMapper mapper, 
IAuthorsRepository repository)
: IRequestHandler<CreateAuthorCommand, int>
{
    public async Task<int> Handle(CreateAuthorCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Creating a new Author");
        var entity = mapper.Map<Author>(request);
        var id = await repository.Create(entity);
        return id;
    }
}
