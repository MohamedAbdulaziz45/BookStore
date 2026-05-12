using BookStore.Application.Authors.Commands.CreateAuthor;
using BookStore.Application.Authors.Commands.DeleteAuthor;
using BookStore.Application.Authors.Commands.UpdateAuthor;
using BookStore.Application.Authors.Queries.GetAllAuthors;
using BookStore.Application.Authors.Queries.GetAuthorById;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthorsController(IMediator mediator) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await mediator.Send(new GetAllAuthorsQuery());
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var result = await mediator.Send(new GetAuthorByIdQuery(id));
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateAuthorCommand command)
    {
        var id = await mediator.Send(command);
        return CreatedAtAction(nameof(GetById), new { id }, null);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateAuthorCommand command)
    {
        if (id != command.AuthorId) return BadRequest();
        command.AuthorId = id;
        await mediator.Send(command);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        await mediator.Send(new DeleteAuthorCommand { AuthorId = id });
        return NoContent();
    }
}
