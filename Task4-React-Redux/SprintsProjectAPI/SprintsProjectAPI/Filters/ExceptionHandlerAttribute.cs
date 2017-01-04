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

            if (context.Exception is ValidationException)
            {
                context.Response = new HttpResponseMessage(HttpStatusCode.BadRequest) { ReasonPhrase = message };
                return;
            }

            if (context.Exception is NoContentException)
            {
                context.Response = new HttpResponseMessage(HttpStatusCode.NoContent) { ReasonPhrase = message };
                return;
            }

            context.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError) { ReasonPhrase = message };
        }
    }
}