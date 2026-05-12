using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Books.Commands.CreateBook;

internal class CreateBookCommandHandler(ILogger<CreateBookCommandHandler> logger, IMapper mapper, IBooksRepository repository) : IRequestHandler<CreateBookCommand, int>
{
    public async Task<int> Handle(CreateBookCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Creating a new Book");
        var entity = mapper.Map<Book>(request);
        var id = await repository.CreateAsync(entity);
        return id;
    }
}
