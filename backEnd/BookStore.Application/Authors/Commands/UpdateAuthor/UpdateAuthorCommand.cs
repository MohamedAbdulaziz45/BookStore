using MediatR;

namespace BookStore.Application.Authors.Commands.UpdateAuthor;

public class UpdateAuthorCommand : IRequest<bool>
{
    public int AuthorId { get; set; }
    public string Name { get; set; } = default!;
    public string Bio { get; set; } = default!;
    public string? Image { get; set; }
}
