using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(SprintsManager.Startup))]

namespace SprintsManager
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            WebApiConfig.Configure(app);
        }
    }
}