using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Web.Http;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using SprintsProjectAPI.Models;
using SprintsProjectAPI.Models.Entities;

namespace SprintsProjectAPI.Repositories
{
    //public class TaskRepository : IRepository<Models.Entities.Task>, IDisposable
    //{
    //    private SprintsProjectAPIContext db;

    //    public TaskRepository(SprintsProjectAPIContext db)
    //    {
    //        this.db = db;
    //    }

    //    public Task<int> Create(Models.Entities.Task item)
    //    {
    //        db.Tasks.Add(item);
    //        return db.SaveChangesAsync();
    //    }

    //    public Task<int> Delete(Models.Entities.Task item)
    //    {
    //        db.Tasks.Remove(item);
    //        return db.SaveChangesAsync();
    //    }

    //    public void Dispose()
    //    {
    //        db.Dispose();
    //    }

    //    public bool Exists(int id)
    //    {
    //        return db.Tasks.Count(e => e.Id == id) > 0;
    //    }

    //    public Task<Models.Entities.Task> FindAsync(int id)
    //    {
    //        return db.Tasks.FindAsync(id);
    //    }

    //    public Task<Models.Entities.Task> Get(int id)
    //    {
    //        return db.Tasks.FindAsync(id);
    //    }

    //    public IQueryable<Models.Entities.Task> GetAll()
    //    {
    //        return db.Tasks;
    //    }

    //    public Task<int> Update(int id, Models.Entities.Task item)
    //    {
    //        db.Entry(item).State = EntityState.Modified;
    //        return db.SaveChangesAsync();
    //    }
    //}
}