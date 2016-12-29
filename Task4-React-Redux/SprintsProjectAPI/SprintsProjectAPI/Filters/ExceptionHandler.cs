using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;

namespace SprintsProjectAPI.Filters
{
    public class ExceptionHandler : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            var message = context.Exception.Message;

            if (context.Exception is ValidationException)
            {
                context.Response = new HttpResponseMessage(HttpStatusCode.BadRequest) { ReasonPhrase = message };
                return;
            }

            context.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError) { ReasonPhrase = message };
        }
    }
}