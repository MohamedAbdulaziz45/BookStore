using BookStore.Application.Common.Interface;
using BookStore.Application.Services.CartService;
using BookStore.Application.Users;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;

namespace BookStore.Application.Extensions;

public static class ServiceCollectionExtension
{
    public static void AddApplication(this IServiceCollection services)
    {
        var applicationAssembly = typeof(ServiceCollectionExtension).Assembly;
        
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(applicationAssembly));

        services.AddAutoMapper(cfg => { }, applicationAssembly);

        services.AddValidatorsFromAssembly(applicationAssembly)
                .AddFluentValidationAutoValidation();
        services.AddScoped<IUserContext, UserContext>();
        services.AddScoped<ICartService, CartService>();
        services.AddHttpContextAccessor();

    }
}
