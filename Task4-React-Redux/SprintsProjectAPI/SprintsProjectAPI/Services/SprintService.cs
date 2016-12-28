using SprintsProjectAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using SprintsProjectAPI.UnitsOfWork;
using SprintsProjectAPI.Models.Entities;

namespace SprintsProjectAPI.Services
{
    public class SprintService : IService<Sprint>
    {
        private IUnitOfWork unitOfWork;

        public SprintService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<bool> Create(Sprint item)
        {
            if (!Validate(item))
            {
                return false;
            }
            unitOfWork.Sprints.Create(item);
            return await unitOfWork.SaveChanges();
        }

        public bool Validate(Sprint item)
        {
            bool valid = true;
            ValidateDates(ref valid, item.BeginningDate, item.ExpirationDate);

            return valid;
        }

        private void ValidateDates(ref bool valid, string beginningDateString, string expirationDateString)
        {
            var beginningDate = DateTime.Parse(beginningDateString);
            var expirationDate = DateTime.Parse(expirationDateString);
            var compare = DateTime.Compare(expirationDate, beginningDate);
            valid = (compare < 0) ? false : true;
        }

        public async Task<bool> Delete(Sprint item)
        {
            unitOfWork.Sprints.Delete(item);
            return await unitOfWork.SaveChanges();
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

        public async Task<bool> Update(Sprint item)
        {
            if (!Validate(item))
            {
                return false;
            }
            unitOfWork.Sprints.Update(item);
            return await unitOfWork.SaveChanges();
        }
    }
}