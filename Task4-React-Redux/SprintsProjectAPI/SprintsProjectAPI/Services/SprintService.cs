using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using SprintsProjectAPI.UnitsOfWork;

namespace SprintsProjectAPI.Services
{
    public class SprintService : IService<Sprint>
    {
        private IUnitOfWork unitOfWork;

        public SprintService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public Task<int> Create(Sprint item)
        {
            return unitOfWork.Sprints.Create(item);
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