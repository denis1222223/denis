using System.Linq;
using System.Threading.Tasks;
using Task = System.Threading.Tasks.Task;

using SprintsManager.Data.Models.Entities;
using SprintsManager.Data.UnitsOfWork;

namespace SprintsManager.Business.Services
{
    public class SubtaskService : IService<Subtask>
    {
        private IUnitOfWork unitOfWork;

        public SubtaskService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<Subtask> Create(Subtask item)
        {
            item = unitOfWork.Subtasks.Create(item);
            await unitOfWork.SaveChanges();
            return item;
        }

        public async Task Delete(int id)
        {
            unitOfWork.Subtasks.Delete(id);
            await unitOfWork.SaveChanges();
        }

        public async Task<Subtask> Get(int id)
        {
            return await unitOfWork.Subtasks.Get(id);
        }

        public IQueryable<Subtask> GetAll()
        {
            return unitOfWork.Subtasks.GetAll();
        }

        public async Task Update(Subtask item)
        {
            unitOfWork.Subtasks.Update(item);
            await unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
        }
    }
}