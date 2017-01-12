using System.Linq;
using System.Threading.Tasks;
using Task = System.Threading.Tasks.Task;

using SprintsManager.Data.UnitsOfWork;
using SprintsManager.Data.Models.Entities;

namespace SprintsManager.Business.Services
{
    public class SprintService : IService<Sprint>
    {
        private IUnitOfWork unitOfWork;

        public SprintService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<Sprint> Create(Sprint item)
        {
            unitOfWork.Sprints.Create(item);
            await unitOfWork.SaveChanges();
            return item;
        }

        public async Task Delete(int id)
        {
            unitOfWork.Sprints.Delete(id);
            await unitOfWork.SaveChanges();
        }

        public async Task<Sprint> Get(int id)
        {
            return await unitOfWork.Sprints.Get(id);
        }

        public IQueryable<Sprint> GetAll()
        {
            return unitOfWork.Sprints.GetAll();
        }

        public async Task Update(Sprint item)
        {
            unitOfWork.Sprints.Update(item);
            await unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
        }
    }
}