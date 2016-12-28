using AutoMapper;
using Newtonsoft.Json.Serialization;
using SprintsProjectAPI.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace SprintsProjectAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            config.EnableCors();

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
