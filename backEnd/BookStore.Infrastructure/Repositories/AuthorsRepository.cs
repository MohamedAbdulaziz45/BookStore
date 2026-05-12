using BookStore.Domain.Entities;
using BookStore.Domain.Repositories;
using BookStore.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Infrastructure.Repositories;

internal class AuthorsRepository(BookStoreDBContext dbContext) : IAuthorsRepository
{
    public async Task<int> Create(Author entity)
    {
        await dbContext.Authors.AddAsync(entity);
        await dbContext.SaveChangesAsync();
        return entity.AuthorId;
    }

    public async Task<IEnumerable<Author>> GetAllAsync()
    {
        return await dbContext.Authors.ToListAsync();
    }

    public async Task<Author?> GetByIdAsync(int id)
    {
        return await dbContext.Authors.FirstOrDefaultAsync(a => a.AuthorId == id);
    }

    public async Task<bool> IsAuthorExist(int authorId)
    {
        return await dbContext.Authors.AnyAsync(a => a.AuthorId == authorId);
    }

    public async Task<bool> UpdateAsync(Author entity)
    {
        dbContext.Authors.Update(entity);
        return await dbContext.SaveChangesAsync() > 0;
    }

    public async Task SaveChanges()
    {
        await dbContext.SaveChangesAsync();
    }

    public async Task Delete(Author entity)
    {
        dbContext.Authors.Remove(entity);
        await dbContext.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var entity = await dbContext.Authors.FindAsync(id);
        if (entity == null) return false;
        dbContext.Authors.Remove(entity);
        return await dbContext.SaveChangesAsync() > 0;
    }
}
