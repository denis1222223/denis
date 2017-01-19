using AutoMapper;
using Newtonsoft.Json.Serialization;
using SprintsManager.Filters;
using SprintsManager.Models.DTO;
using System.Web.Http;
using SprintsManager.Data.Models.Entities;
using Owin;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi.OwinHost;
using SprintsManager.JwtValidation;

namespace SprintsManager
{
    public static class WebApiConfig
    {
        public static void Configure(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            FiltersConfig.Register(config);
            RoutesConfig.Register(config);
            JwtValidationConfig.Register(config);

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = 
                new CamelCasePropertyNamesContractResolver();

            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<SprintDTO, Sprint>();
                cfg.CreateMap<TaskDTO, Task>();
                cfg.CreateMap<SubtaskDTO, Subtask>();
            });

            app.UseNinjectMiddleware(NinjectConfig.CreateKernel).UseNinjectWebApi(config);

            app.UseWebApi(config);
        }
    }
}
