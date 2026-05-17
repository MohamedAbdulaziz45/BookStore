using BookStore.Application.Services.PaymentService.Stripe;
using BookStore.Domain.Constants;
using BookStore.Domain.Entities;
using BookStore.Domain.Exceptions;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Orders.Commands.UpdateOrderStatus;

internal class UpdateOrderStatusCommandHandler(
    ILogger<UpdateOrderStatusCommandHandler> logger,
    IOrdersRepository ordersRepository,
    INotificationsRepository notificationsRepository,
    IStripeService stripeService) : IRequestHandler<UpdateOrderStatusCommand>
{
    public async Task Handle(UpdateOrderStatusCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Admin updating Order {OrderId} status to {Status}", request.OrderId, request.NewStatus);

        var order = await ordersRepository.GetByIdWithDetailsAsync(request.OrderId)
            ?? throw new NotFoundException(nameof(Order), request.OrderId.ToString());

        if (!IsValidAdminTransition(order.Status, request.NewStatus))
        {
            throw new BadRequestException(
                $"Invalid status transition from {order.Status} to {request.NewStatus}.");
        }

        if (request.NewStatus == OrderStatus.Cancelled
            && !string.IsNullOrEmpty(order.Payment?.StripePaymentIntentId))
        {
            await stripeService.RefundPaymentAsync(
                order.Payment.StripePaymentIntentId,
                $"admin_order_cancel_{order.OrderId}",
                cancellationToken);
        }

        await ordersRepository.UpdateStatusAsync(order.OrderId, request.NewStatus);

        await notificationsRepository.CreateAsync(new Notification
        {
            CustomerId = order.CustomerId,
            Title = $"Order #{order.OrderId} status updated",
            Message = $"Your order status changed to {request.NewStatus}.",
            Type = "OrderStatusChanged",
            LinkUrl = $"/orders/{order.OrderId}",
            IsRead = false
        });
    }

    private static bool IsValidAdminTransition(OrderStatus from, OrderStatus to)
    {
        switch (from)
        {
            case OrderStatus.Pending:
                return to == OrderStatus.Processing || to == OrderStatus.Cancelled;
            case OrderStatus.Processing:
                return to == OrderStatus.Shipped || to == OrderStatus.Cancelled;
            case OrderStatus.Shipped:
                return to == OrderStatus.Delivered;
            default:
                return false;
        }
    }
}
