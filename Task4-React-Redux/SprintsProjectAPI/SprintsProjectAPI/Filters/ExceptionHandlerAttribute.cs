using SprintsManager.Data.Exceptions;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;

namespace SprintsManager.Filters
{
    public class ExceptionHandlerAttribute : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            var message = context.Exception.Message;

            if (context.Exception is NoContentException)
            {
                var payload = context.Exception.Data["id"];
                context.Response = context.Request.CreateResponse(HttpStatusCode.NoContent, (int)payload);
                return;
            }

            context.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError) { ReasonPhrase = message };
        }
    }
}