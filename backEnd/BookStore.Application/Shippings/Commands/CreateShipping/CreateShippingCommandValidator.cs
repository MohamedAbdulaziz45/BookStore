using FluentValidation;

namespace BookStore.Application.Shippings.Commands.CreateShipping;

public class CreateShippingCommandValidator : AbstractValidator<CreateShippingCommand>
{
    public CreateShippingCommandValidator()
    {
        RuleFor(x => x.CarrierName).NotEmpty().WithMessage("CarrierName is required");
        RuleFor(x => x.TrackingNumber).NotEmpty().WithMessage("TrackingNumber is required");
        RuleFor(x => x.ShippingStatus).NotEmpty().WithMessage("ShippingStatus is required");
        RuleFor(x => x.EstimatedDeliveryDate).NotEmpty().WithMessage("EstimatedDeliveryDate is required");
        RuleFor(x => x.ActualDeliveryDate).NotEmpty().WithMessage("ActualDeliveryDate is required");
        RuleFor(x => x.OrderId).GreaterThan(0).WithMessage("OrderId must be greater than 0");
    }
}
