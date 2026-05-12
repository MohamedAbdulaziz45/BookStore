using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Books.Commands.UpdateBook;

internal class UpdateBookCommandHandler(ILogger<UpdateBookCommandHandler> logger, IMapper mapper, IBooksRepository repository) : IRequestHandler<UpdateBookCommand, bool>
{
    public async Task<bool> Handle(UpdateBookCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Updating Book {request.BookId}");
        
        var existingEntity = await repository.GetByIdAsync(request.BookId);
        if (existingEntity == null)
            throw new NotFoundException(nameof(Book), request.BookId.ToString());

        mapper.Map(request, existingEntity);
        return await repository.UpdateAsync(existingEntity);
    }
}
