using System;
using System.Web;
using System.Web.Http;
using Microsoft.Web.Infrastructure.DynamicModuleHelper;
using Ninject;
using Ninject.Web.Common;
using Ninject.Web.WebApi;
using SprintsManager.App_Start;

using SprintsManager.Data.Models.Entities;
using SprintsManager.Data.UnitsOfWork;
using SprintsManager.Data.Repositories;
using SprintsManager.Data.Models;
using SprintsManager.Business.Services;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(NinjectWebCommon), "Stop")]

namespace SprintsManager.App_Start
{
    public static class NinjectWebCommon
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start()
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }

        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }

        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(kernel);
                GlobalConfiguration.Configuration.DependencyResolver = new NinjectDependencyResolver(kernel);

                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<IService<Sprint>>().To<SprintService>();
            kernel.Bind<IService<Task>>().To<TaskService>();
            kernel.Bind<IService<Subtask>>().To<SubtaskService>();

            kernel.Bind<IUnitOfWork>().To<UnitOfWork>();

            kernel.Bind<ISprintsManagerRepository<Sprint>>().To<SprintsManagerRepository<Sprint>>();
            kernel.Bind<ISprintsManagerRepository<Task>>().To<SprintsManagerRepository<Task>>();
            kernel.Bind<ISprintsManagerRepository<Subtask>>().To<SprintsManagerRepository<Subtask>>();

            kernel.Bind<SprintsManagerContext>().ToSelf().InRequestScope();
        }
    }
}