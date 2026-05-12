using FluentValidation;

namespace BookStore.Application.Payments.Commands.UpdatePayment;

public class UpdatePaymentCommandValidator : AbstractValidator<UpdatePaymentCommand>
{
    public UpdatePaymentCommandValidator()
    {
        RuleFor(x => x.PaymentId).GreaterThan(0).WithMessage("PaymentId must be greater than 0");
        RuleFor(x => x.Amount).GreaterThanOrEqualTo(0).WithMessage("Amount cannot be negative");
        RuleFor(x => x.PaymentMethod).NotEmpty().WithMessage("PaymentMethod is required");
        RuleFor(x => x.TransactionDate).NotEmpty().WithMessage("TransactionDate is required");
        RuleFor(x => x.OrderId).GreaterThan(0).WithMessage("OrderId must be greater than 0");
    }
}
