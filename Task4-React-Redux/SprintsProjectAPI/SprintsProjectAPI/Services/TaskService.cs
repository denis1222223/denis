using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using SprintsProjectAPI.Repositories;
using SprintsProjectAPI.UnitsOfWork;

namespace SprintsProjectAPI.Services
{
    public class TaskService : IService<Models.Entities.Task>
    {
        private IUnitOfWork unitOfWork;

        public TaskService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public Task<int> Create(Models.Entities.Task item)
        {
            return unitOfWork.Tasks.Create(item);
        }

        public Task<int> Delete(Models.Entities.Task item)
        {
            return unitOfWork.Tasks.Delete(item);
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
        }

        public bool Exists(int id)
        {
            return unitOfWork.Sprints.Exists(id);
        }

        public Task<Models.Entities.Task> FindAsync(int id)
        {
            return unitOfWork.Tasks.FindAsync(id);
        }

        public Task<Models.Entities.Task> Get(int id)
        {
            return unitOfWork.Tasks.Get(id);
        }

        public IQueryable<Models.Entities.Task> GetAll()
        {
            return unitOfWork.Tasks.GetAll();
        }

        public Task<int> Update(int id, Models.Entities.Task item)
        {
            return unitOfWork.Tasks.Update(id, item);
        }
    }
}