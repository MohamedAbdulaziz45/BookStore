using MediatR;

namespace BookStore.Application.Shippings.Commands.UpdateShipping;

public class UpdateShippingCommand : IRequest<bool>
{
    public int ShippingId { get; set; } = default;
    public string CarrierName { get; set; } = default!;
    public string TrackingNumber { get; set; } = default!;
    public string ShippingStatus { get; set; } = default!;
    public DateTime EstimatedDeliveryDate { get; set; } = default;
    public DateTime? ActualDeliveryDate { get; set; } = default;
    public int OrderId { get; set; } = default;
}
