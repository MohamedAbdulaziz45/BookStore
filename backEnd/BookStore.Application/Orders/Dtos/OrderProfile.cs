using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Application.Orders.Commands.CreateOrder;
using BookStore.Application.Orders.Commands.UpdateOrder;

namespace BookStore.Application.Orders.Dtos;

public class OrderProfile : Profile
{
    public OrderProfile()
    {
        CreateMap<Order, OrderDto>();
        CreateMap<CreateOrderCommand, Order>();
        CreateMap<UpdateOrderCommand, Order>();
    }
}
