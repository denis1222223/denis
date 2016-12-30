using AutoMapper;
using Newtonsoft.Json.Serialization;
using SprintsProjectAPI.Filters;
using SprintsProjectAPI.Models.DTO;
using SprintsProjectAPI.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SprintsProjectAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Filters.Add(new ExceptionHandlerAttribute());
            config.Filters.Add(new ValidateModelAttribute());

            // Web API configuration and services
            var corsAttr = new EnableCorsAttribute("http://localhost:3001", "*", "*");
            config.EnableCors(corsAttr);

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
