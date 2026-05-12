using AutoMapper;
using BookStore.Application.Users;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Reviews.Commands.CreateReview;

internal class CreateReviewCommandHandler(
ILogger<CreateReviewCommandHandler> logger, 
IMapper mapper, 
IReviewsRepository reviewRepository,
IUserContext userContext,
ICustomersRepository customersRepository)
: IRequestHandler<CreateReviewCommand, int>
{
    public async Task<int> Handle(CreateReviewCommand request, CancellationToken cancellationToken)
    {


        var user = userContext.GetCurrentUser();

        var customer = await customersRepository.GetByUserIdAsync(user.Id);

        if (customer == null)
        {
            throw new NotFoundException("Customer", $"UserId {user.Id} has no associated customer");
        }

        var HasReview = await reviewRepository.HasReviewForBookAsync(customer.CustomerId,request.BookId);
        if(HasReview == true){
            throw new Exception("customer already made a review for this book");
        }

        // implement this later "has the customer bought this book before reivewing it"
        logger.LogInformation("User {UserId} is creating a review", user.Id);
        var entity = mapper.Map<Review>(request);
        entity.CustomerId = customer.CustomerId;
        var id = await reviewRepository.CreateAsync(entity);
        return id;
    }
}
