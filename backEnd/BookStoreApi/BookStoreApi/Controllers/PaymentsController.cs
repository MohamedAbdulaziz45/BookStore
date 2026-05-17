
using BookStore.Application.Payments.Queries.GetPaymentByOrderId;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreApi.Controllers;

[ApiController]
[Route("api/payments")]
[Authorize]
public class PaymentsController(IMediator mediator) : ControllerBase
{
    [HttpGet("order/{orderId:int}")]
    public async Task<IActionResult> GetByOrderId([FromRoute] int orderId)
        => Ok(await mediator.Send(new GetPaymentByOrderIdQuery(orderId)));
}
