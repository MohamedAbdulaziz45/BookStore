using BookStore.Application.Checkout.Commands.CreateCheckoutSession;
using BookStore.Application.Checkout.Commands.FulfillCheckout;
using BookStore.Application.Services.PaymentService.Contracts;
using BookStore.Application.Services.PaymentService.Stripe;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace BookStoreApi.Controllers;

[Route("api/checkout")]
[ApiController]
[Authorize]
public class CheckoutController(
    IMediator mediator) : ControllerBase
{
    [HttpPost("create-session")]
    public async Task<IActionResult> CreateSession([FromBody] CreateCheckoutSessionCommand command)
    {
        return Ok(await mediator.Send(command));
    }



}
