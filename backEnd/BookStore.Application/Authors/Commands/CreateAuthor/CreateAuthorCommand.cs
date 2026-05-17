using MediatR;

namespace BookStore.Application.Authors.Commands.CreateAuthor;

public class CreateAuthorCommand : IRequest<int>
{
    public string Name { get; set; } = default!;
    public string Bio { get; set; } = default!;
    public string? Image { get; set; }
    public bool IsFeatured { get; set; } = default;
    public int? FeaturedSortOrder { get; set; } = default;
}
