using BookStore.Domain.Constants;
using BookStore.Domain.Entities;
using BookStore.Domain.Repositories;
using BookStore.Domain.Views;
using BookStore.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace BookStore.Infrastructure.Repositories;

internal class BooksRepository(BookStoreDBContext dbContext) : IBooksRepository
{
    public async Task<IEnumerable<Book>> GetAllAsync()
    {
        return await dbContext.Books.ToListAsync();
    }

    public async Task<(IEnumerable<MiniBookView>, int)> GetAllMatchingAsync
    (string? searchPhrase
    , int pageSize
    , int pageNumber
    , string? sortBy
    , SortDirection sortDirection) {

        var searchPhraseLower = searchPhrase?.ToLower();

        var baseQuery = dbContext
        .BookViews
        .Where(b => searchPhraseLower == null || (b.Title.ToLower().Contains(searchPhraseLower) ||
        b.Author.ToLower().Contains(searchPhraseLower)));

        var totalCount = await baseQuery.CountAsync();

        if (sortBy != null)
        {
            var columnSelector = new Dictionary<string, Expression<Func<BookView, object>>>
            {
               {nameof(BookView.Title),r=>r.Title },
              {nameof(BookView.Price),r=>r.Price},
              {nameof(BookView.Author),r=>r.Author},
                {nameof(BookView.Rating),r=>r.Rating}
            };
            var selectedColumn = columnSelector[sortBy];

            baseQuery = (sortDirection == SortDirection.Ascending) ?
            baseQuery.OrderBy(selectedColumn)
            : baseQuery.OrderByDescending(selectedColumn);
        }
        var bookViews = await baseQuery
                       .Skip(pageSize * (pageNumber - 1))
                       .Take(pageSize)
                       .Select(b => new MiniBookView
                       {
                           Id = b.Id,
                           Title = b.Title,
                           Price = b.Price,
                           Image = b.Image,
                           Author = b.Author,
                           Rating = b.Rating,
                           ReviewCount = b.ReviewCount
                       })
                       .ToListAsync();

        return (bookViews, totalCount);
        
    }

    public async Task<(IEnumerable<MiniBookView>, int)> GetAllByGenreIdAsync
    (int genreId
    ,string? searchPhrase
    , int pageSize
    , int pageNumber
    , string? sortBy
    , SortDirection sortDirection)
    {

        var searchPhraseLower = searchPhrase?.ToLower();

        var baseQuery = dbContext
        .BookViews
         .Where(b => dbContext.BookGenres
        .Any(bg => bg.BookId == b.Id && bg.GenreId == genreId))
        .Where(b => searchPhraseLower == null || (b.Title.ToLower().Contains(searchPhraseLower) ||
        b.Author.ToLower().Contains(searchPhraseLower)));

        var totalCount = await baseQuery.CountAsync();

        if (sortBy != null)
        {
            var columnSelector = new Dictionary<string, Expression<Func<BookView, object>>>
            {
               {nameof(BookView.Title),r=>r.Title },
              {nameof(BookView.Price),r=>r.Price},
              {nameof(BookView.Author),r=>r.Author},
                {nameof(BookView.Rating),r=>r.Rating}
            };
            var selectedColumn = columnSelector[sortBy];

            baseQuery = (sortDirection == SortDirection.Ascending) ?
            baseQuery.OrderBy(selectedColumn)
            : baseQuery.OrderByDescending(selectedColumn);
        }
        var bookViews = await baseQuery
                       .Skip(pageSize * (pageNumber - 1))
                       .Take(pageSize)
                       .Select(b => new MiniBookView
                       {
                           Id = b.Id,
                           Title = b.Title,
                           Price = b.Price,
                           Image = b.Image,
                           Author = b.Author,
                           Rating = b.Rating,
                           ReviewCount = b.ReviewCount
                       })
                       .ToListAsync();

        return (bookViews, totalCount);

    }

    public async Task<Book?> GetByIdAsync(int id)
    {
        return await dbContext.Books.FindAsync(id);
    }
    public async Task<BookView?> GetViewByIdAsync(int id)
    {
        return await dbContext.BookViews
            .FirstOrDefaultAsync(b => b.Id == id);
    }
    public async Task<int> CreateAsync(Book entity)
    {
        dbContext.Books.Add(entity);
        await dbContext.SaveChangesAsync();
        return entity.BookId;
    }

    public async Task<bool> UpdateAsync(Book entity)
    {
        dbContext.Books.Update(entity);
        return await dbContext.SaveChangesAsync() > 0;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var entity = await dbContext.Books.FindAsync(id);
        if (entity == null) return false;
        dbContext.Books.Remove(entity);
        return await dbContext.SaveChangesAsync() > 0;
    }

   public async Task<IEnumerable<PreviewBookView>> GetByIdsAsync(IEnumerable<int> ids){

        var books = await dbContext.Books
        .Where(b => ids.Contains(b.BookId))
        .Select(b => new PreviewBookView(
        b.BookId,
        b.Title,
        b.Price,
        b.QuantityInStock,
        b.BookImage != null ? b.BookImage.ImageURL : null
    ))
    .ToListAsync();

    return books;
    }

    //after completing implementing payment part
    //public async Task<bool>DidCustomerBuyBook(int customerId, int bookId)
    //{
    //    var entity = await dbContext.Customers.FindAsync(customerId);
    //    if (entity == null) return false;
    //    //add customer bought books with id here 
    //}
}
