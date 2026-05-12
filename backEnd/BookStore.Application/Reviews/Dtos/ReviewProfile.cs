using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Application.Reviews.Commands.CreateReview;
using BookStore.Application.Reviews.Commands.UpdateReview;
using BookStore.Domain.Views;

namespace BookStore.Application.Reviews.Dtos;

public class ReviewProfile : Profile
{
    public ReviewProfile()
    {
        CreateMap<Review, ReviewDto>();
        CreateMap<ReviewView, ReviewViewDto>();
        CreateMap<CreateReviewCommand, Review>();
        CreateMap<UpdateReviewCommand, Review>();
    }
}
