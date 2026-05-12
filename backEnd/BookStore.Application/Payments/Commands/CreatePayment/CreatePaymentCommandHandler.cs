using AutoMapper;
using BookStore.Domain.Entities;
using BookStore.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;

namespace BookStore.Application.Payments.Commands.CreatePayment;

internal class CreatePaymentCommandHandler(ILogger<CreatePaymentCommandHandler> logger, IMapper mapper, IPaymentsRepository repository) : IRequestHandler<CreatePaymentCommand, int>
{
    public async Task<int> Handle(CreatePaymentCommand request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Creating a new Payment");
        var entity = mapper.Map<Payment>(request);
        var id = await repository.CreateAsync(entity);
        return id;
    }
}
