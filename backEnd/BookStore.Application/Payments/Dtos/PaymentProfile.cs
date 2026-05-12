using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Application.Payments.Commands.CreatePayment;
using BookStore.Application.Payments.Commands.UpdatePayment;

namespace BookStore.Application.Payments.Dtos;

public class PaymentProfile : Profile
{
    public PaymentProfile()
    {
        CreateMap<Payment, PaymentDto>();
        CreateMap<CreatePaymentCommand, Payment>();
        CreateMap<UpdatePaymentCommand, Payment>();
    }
}
