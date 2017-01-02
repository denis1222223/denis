using AutoMapper;
using Newtonsoft.Json.Serialization;
using SprintsManager.Filters;
using SprintsManager.Models.DTO;
using SprintsManager.Models.Entities;
using System.Web.Http;

namespace SprintsManager
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Filters.Add(new ExceptionHandlerAttribute());
            config.Filters.Add(new ValidateModelAttribute());

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            Mapper.Initialize(cfg => {
                cfg.CreateMap<SprintDTO, Sprint>();
                cfg.CreateMap<TaskDTO, Task>();
                cfg.CreateMap<SubtaskDTO, Subtask>();
            });
        }
    }
}
