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
    //public class SubtaskService : IService<Subtask>, IDisposable
    //{
    //    private IUnitOfWork unitOfWork;

    //    public SubtaskService(IUnitOfWork unitOfWork)
    //    {
    //        this.unitOfWork = unitOfWork;
    //    }

    //    public Task<int> Create(Subtask item)
    //    {
    //        return unitOfWork.Subtasks.Create(item);
    //    }

    //    public Task<int> Delete(Subtask item)
    //    {
    //        return unitOfWork.Subtasks.Delete(item);
    //    }

    //    public void Dispose()
    //    {
    //        unitOfWork.Dispose();
    //    }

    //    public bool Exists(int id)
    //    {
    //        return unitOfWork.Subtasks.Exists(id);
    //    }

    //    public Task<Subtask> FindAsync(int id)
    //    {
    //        return unitOfWork.Subtasks.FindAsync(id);
    //    }

    //    public Task<Subtask> Get(int id)
    //    {
    //        return unitOfWork.Subtasks.Get(id);
    //    }

    //    public IQueryable<Subtask> GetAll()
    //    {
    //        return unitOfWork.Subtasks.GetAll();
    //    }

    //    public Task<int> Update(int id, Subtask item)
    //    {
    //        return unitOfWork.Subtasks.Update(id, item);
    //    }
    //}
}