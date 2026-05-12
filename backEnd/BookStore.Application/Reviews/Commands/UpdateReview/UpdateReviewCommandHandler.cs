using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Reviews.Commands.UpdateReview;

internal class UpdateReviewCommandHandler(ILogger<UpdateReviewCommandHandler> logger, IMapper mapper, IReviewsRepository repository) : IRequestHandler<UpdateReviewCommand, bool>
{
    public async Task<bool> Handle(UpdateReviewCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation($"Updating Review {request.ReviewId}");
        
        var existingEntity = await repository.GetByIdAsync(request.ReviewId);
        if (existingEntity == null)
            throw new NotFoundException(nameof(Review), request.ReviewId.ToString());

        mapper.Map(request, existingEntity);
        return await repository.UpdateAsync(existingEntity);
    }
}
