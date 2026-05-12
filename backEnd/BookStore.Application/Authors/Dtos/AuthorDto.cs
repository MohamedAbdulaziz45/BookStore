namespace BookStore.Application.Authors.Dtos;

public class AuthorDto
{
    public int AuthorId { get; set; } 
    public string Name { get; set; } = default!;
    public string Bio { get; set; } = default!;
    public string? Image { get; set; }
}
