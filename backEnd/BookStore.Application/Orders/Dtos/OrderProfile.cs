using AutoMapper;
using BookStore.Domain.Entities;


namespace BookStore.Application.Orders.Dtos;

public class OrderProfile : Profile
{
    public OrderProfile()
    {
        CreateMap<ShippingAddressSnapshot, ShippingAddressDto>();
        CreateMap<Order, OrderDto>();

    }
}
