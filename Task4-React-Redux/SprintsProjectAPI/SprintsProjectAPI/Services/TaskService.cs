using Task = SprintsProjectAPI.Models.Entities.Task;
using Threading = System.Threading.Tasks;
using System.Linq;
using System.Threading.Tasks;
using SprintsProjectAPI.UnitsOfWork;

namespace SprintsProjectAPI.Services
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

        public async Threading.Task Delete(Task item)
        {
            unitOfWork.Tasks.Delete(item);
            await unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
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
    }
}