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

        public async Task<bool> Create(Models.Entities.Task item)
        {
            unitOfWork.Tasks.Create(item);
            return await unitOfWork.SaveChanges();
        }

        public async Task<bool> Delete(Models.Entities.Task item)
        {
            unitOfWork.Tasks.Delete(item);
            return await unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
        }

        public bool Exists(int id)
        {
            return unitOfWork.Tasks.Exists(id);
        }

        public async Task<Models.Entities.Task> Get(int id)
        {
            return await unitOfWork.Tasks.Get(id);
        }

        public IQueryable<Models.Entities.Task> GetAll()
        {
            return unitOfWork.Tasks.GetAll();
        }

        public async Task<bool> Update(Models.Entities.Task item)
        {
            unitOfWork.Tasks.Update(item);
            return await unitOfWork.SaveChanges();
        }
    }
}