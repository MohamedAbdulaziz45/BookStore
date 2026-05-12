using BookStore.Application.Orders.Commands.CreateOrder;

using BookStore.Application.Orders.Commands.UpdateOrder;
using BookStore.Application.Orders.Queries.GetAllOrders;
using BookStore.Application.Orders.Queries.GetOrderById;
using BookStore.Domain.Constants;
using CloudinaryDotNet.Actions;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreApi.Controllers;

[ApiController]
[Route("api/orders")]
[Authorize]
public class OrdersController(IMediator mediator) : ControllerBase
{
    [HttpGet]
    [Authorize(Roles = UserRoles.Admin)]
    public async Task<IActionResult> GetAll()
    {
        var result = await mediator.Send(new GetAllOrdersQuery());
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var result = await mediator.Send(new GetOrderByIdQuery(id));
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateOrderCommand command)
    {
        var id = await mediator.Send(command);
        return CreatedAtAction(nameof(GetById), new { id }, null);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateOrderCommand command)
    {

        command.OrderId = id;
        await mediator.Send(command);
        return NoContent();
    }


}
