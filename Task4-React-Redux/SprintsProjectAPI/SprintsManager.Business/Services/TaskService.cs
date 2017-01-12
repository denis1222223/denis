using Threading = System.Threading.Tasks;
using System.Linq;
using System.Threading.Tasks;

using SprintsManager.Data.UnitsOfWork;
using Task = SprintsManager.Data.Models.Entities.Task;

namespace SprintsManager.Business.Services
{
    public class TaskService : IService<Task>
    {
        private IUnitOfWork unitOfWork;

        public TaskService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<Task> Create(Task item)
        {
            item = unitOfWork.Tasks.Create(item);
            await unitOfWork.SaveChanges();
            return item;
        }

        public async Threading.Task Delete(int id)
        {
            unitOfWork.Tasks.Delete(id);
            await unitOfWork.SaveChanges();
        }

        public async Task<Task> Get(int id)
        {
            return await unitOfWork.Tasks.Get(id);
        }

        public IQueryable<Task> GetAll()
        {
            return unitOfWork.Tasks.GetAll();
        }

        public async Threading.Task Update(Task item)
        {
            unitOfWork.Tasks.Update(item);
            await unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
        }
    }
}