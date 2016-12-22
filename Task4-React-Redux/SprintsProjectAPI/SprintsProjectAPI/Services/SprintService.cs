using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using SprintsProjectAPI.Repositories;

namespace SprintsProjectAPI.Services
{
    public class SprintService : IService<Sprint>
    {
        private UnitOfWork unitOfWork;

        public SprintService()
        {
            unitOfWork = new UnitOfWork();
        }

        public Task<int> Create(Sprint item)
        {
            return unitOfWork.Sprints.Create(item);
        }

        public Task<int> Delete(Sprint item)
        {
            return unitOfWork.Sprints.Delete(item);
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
        }

        public bool Exists(int id)
        {
            return unitOfWork.Sprints.Exists(id);
        }

        public Task<Sprint> FindAsync(int id)
        {
            return unitOfWork.Sprints.FindAsync(id);
        }

        public Task<Sprint> Get(int id)
        {
            return unitOfWork.Sprints.Get(id);
        }

        public IQueryable<Sprint> GetAll()
        {
            return unitOfWork.Sprints.GetAll();
        }

        public Task<int> Update(int id, Sprint item)
        {
            return unitOfWork.Sprints.Update(id, item);
        }
    }
}