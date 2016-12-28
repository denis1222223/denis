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
    public class TaskRepository : IRepository<Models.Entities.Task>
    {
        private SprintsProjectAPIContext db;

        public SprintsProjectAPIContext DBContext
        {
            set { db = value; }
        }

        public Models.Entities.Task Create(Models.Entities.Task item)
        {
            return db.Tasks.Add(item);
        }

        public Models.Entities.Task Delete(Models.Entities.Task item)
        {
            return db.Tasks.Remove(item);
        }

        public bool Exists(int id)
        {
            return db.Tasks.Count(e => e.Id == id) > 0;
        }

        public Task<Models.Entities.Task> Get(int id)
        {
            return db.Tasks.FindAsync(id);
        }

        public IQueryable<Models.Entities.Task> GetAll()
        {
            return db.Tasks;
        }

        public void Update(Models.Entities.Task item)
        {
            db.Entry(item).State = EntityState.Modified;
        }
    }
}