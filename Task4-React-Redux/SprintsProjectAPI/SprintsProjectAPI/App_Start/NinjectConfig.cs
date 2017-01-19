using Ninject;
using Ninject.Web.Common;

using SprintsManager.Data.Models.Entities;
using SprintsManager.Data.UnitsOfWork;
using SprintsManager.Data.Repositories;
using SprintsManager.Data.Models;
using SprintsManager.Business.Services;
using System.Reflection;

namespace SprintsManager
{
    public static class NinjectConfig
    {
        public static StandardKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());
            RegisterServices(kernel);

            return kernel;
        }

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