using BookStore.Application.Customers.Dtos;
using MediatR;
using System.Collections.Generic;

namespace BookStore.Application.Customers.Queries.GetAllCustomers;

public class GetAllCustomersQuery : IRequest<IEnumerable<CustomerDto>>
{
}
