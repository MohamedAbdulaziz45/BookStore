using BookStore.Domain.Entities;
using BookStore.Domain.Views;

namespace BookStore.Domain.Repositories;

public interface IReviewsRepository
{
    Task<IEnumerable<Review>> GetAllAsync();
    Task<Review?> GetByIdAsync(int id);
    Task<int> CreateAsync(Review entity);
    Task<bool> UpdateAsync(Review entity);
    Task<bool> DeleteAsync(int id);
    Task<IEnumerable<ReviewView>> GetAllViewAsync();
    Task<IEnumerable<ReviewView>> GetAllViewByBookIdAsync(int bookId);
    Task<ReviewView?> GetViewByIdAsync(int id);
    Task<bool> HasReviewForBookAsync(int customerId, int bookId);
}
