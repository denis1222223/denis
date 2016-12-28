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
    public class SubtaskService : IService<Subtask>
    {
        private IUnitOfWork unitOfWork;

        public SubtaskService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<bool> Create(Subtask item)
        {
            unitOfWork.Subtasks.Create(item);
            return await unitOfWork.SaveChanges();
        }

        public async Task<bool> Delete(Subtask item)
        {
            unitOfWork.Subtasks.Delete(item);
            return await unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
        }

        public bool Exists(int id)
        {
            return unitOfWork.Subtasks.Exists(id);
        }

        public async Task<Subtask> Get(int id)
        {
            return await unitOfWork.Subtasks.Get(id);
        }

        public IQueryable<Subtask> GetAll()
        {
            return unitOfWork.Subtasks.GetAll();
        }

        public async Task<bool> Update(Subtask item)
        {
            unitOfWork.Subtasks.Update(item);
            return await unitOfWork.SaveChanges();
        }
    }
}