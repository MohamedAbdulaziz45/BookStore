using FluentValidation;

namespace BookStore.Application.Orders.Commands.UpdateOrder;

public class UpdateOrderCommandValidator : AbstractValidator<UpdateOrderCommand>
{
    public UpdateOrderCommandValidator()
    {
        RuleFor(x => x.OrderId).GreaterThan(0).WithMessage("OrderId must be greater than 0");
        RuleFor(x => x.OrderDate).NotEmpty().WithMessage("OrderDate is required");
        RuleFor(x => x.TotalAmount).GreaterThanOrEqualTo(0).WithMessage("TotalAmount cannot be negative");
        RuleFor(x => x.Status).GreaterThanOrEqualTo(0).WithMessage("Status cannot be negative");
        RuleFor(x => x.CustomerId).GreaterThan(0).WithMessage("CustomerId must be greater than 0");
    }
}
