using BookStore.Application.Payments.Commands.CreatePayment;
using BookStore.Application.Payments.Commands.DeletePayment;
using BookStore.Application.Payments.Commands.UpdatePayment;
using BookStore.Application.Payments.Queries.GetAllPayments;
using BookStore.Application.Payments.Queries.GetPaymentById;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PaymentsController(IMediator mediator) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await mediator.Send(new GetAllPaymentsQuery());
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var result = await mediator.Send(new GetPaymentByIdQuery(id));
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreatePaymentCommand command)
    {
        var id = await mediator.Send(command);
        return CreatedAtAction(nameof(GetById), new { id }, null);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdatePaymentCommand command)
    {
        // Ensuring ID in route matches command is handled manually or skipped for brevity
        // Typically: if (id != command.PaymentId) return BadRequest();
        command.PaymentId = id;
        await mediator.Send(command);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        await mediator.Send(new DeletePaymentCommand(id));
        return NoContent();
    }
}
