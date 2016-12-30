using SprintsProjectAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using SprintsProjectAPI.UnitsOfWork;
using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Filters;

namespace SprintsProjectAPI.Services
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

        public async System.Threading.Tasks.Task Delete(Sprint item)
        {
            unitOfWork.Sprints.Delete(item);
            await unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            unitOfWork.Dispose();
        }

        public bool Exists(int id)
        {
            return unitOfWork.Sprints.Exists(id);
        }

        public async Task<Sprint> Get(int id)
        {
            return await unitOfWork.Sprints.Get(id);
        }

        public IQueryable<Sprint> GetAll()
        {
            return unitOfWork.Sprints.GetAll();
        }

        public async System.Threading.Tasks.Task Update(Sprint item)
        {
            unitOfWork.Sprints.Update(item);
            await unitOfWork.SaveChanges();
        }
    }
}