using SprintsManager.Filters;
using System.Web.Http;

namespace SprintsManager
{
    public class FiltersConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Filters.Add(new ExceptionHandlerAttribute());
            config.Filters.Add(new ValidateModelAttribute());
        }
    }
}