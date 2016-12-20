using SprintsProjectAPI.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Web.Http;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace SprintsProjectAPI.Models
{
    public class TaskRepository : IRepository<Entities.Task>
    {
        private SprintsProjectAPIContext db = new SprintsProjectAPIContext();

        public Task<int> Create(Entities.Task item)
        {
            db.Tasks.Add(item);
            return db.SaveChangesAsync();
        }

        public Task<int> Delete(Entities.Task item)
        {
            db.Tasks.Remove(item);
            return db.SaveChangesAsync();
        }

        public void Dispose()
        {
            db.Dispose();
        }

        public bool Exists(int id)
        {
            return db.Tasks.Count(e => e.Id == id) > 0;
        }

        public Task<Entities.Task> FindAsync(int id)
        {
            return db.Tasks.FindAsync(id);
        }

        public Task<Entities.Task> Get(int id)
        {
            return db.Tasks.FindAsync(id);
        }

        public IQueryable<Entities.Task> GetAll()
        {
            return db.Tasks;
        }

        public Task<int> Update(int id, Entities.Task item)
        {
            db.Entry(item).State = EntityState.Modified;
            return db.SaveChangesAsync();
        }
    }
}