using FluentValidation;

namespace BookStore.Application.Reviews.Commands.UpdateReview;

public class UpdateReviewCommandValidator : AbstractValidator<UpdateReviewCommand>
{
    public UpdateReviewCommandValidator()
    {
        RuleFor(x => x.ReviewId).GreaterThan(0).WithMessage("ReviewId must be greater than 0");
        RuleFor(x => x.ReviewText).NotEmpty().WithMessage("ReviewText is required");
        RuleFor(x => x.Rating).GreaterThanOrEqualTo(0).WithMessage("Rating cannot be negative");
        RuleFor(x => x.ReviewDate).NotEmpty().WithMessage("ReviewDate is required");
        RuleFor(x => x.BookId).GreaterThan(0).WithMessage("BookId must be greater than 0");
        RuleFor(x => x.CustomerId).GreaterThan(0).WithMessage("CustomerId must be greater than 0");
    }
}
