using SprintsProjectAPI.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Web.Http;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using SprintsProjectAPI.Models;

namespace SprintsProjectAPI.Repositories
{
    public class SubtaskRepository : IRepository<Subtask>
    {
        private SprintsProjectAPIContext db;

        public SubtaskRepository(SprintsProjectAPIContext db)
        {
            this.db = db;
        }

        public Task<int> Create(Subtask item)
        {
            db.Subtasks.Add(item);
            return db.SaveChangesAsync();
        }

        public Task<int> Delete(Subtask item)
        {
            db.Subtasks.Remove(item);
            return db.SaveChangesAsync();
        }

        public void Dispose()
        {
            db.Dispose();
        }

        public bool Exists(int id)
        {
            return db.Subtasks.Count(e => e.Id == id) > 0;
        }

        public Task<Subtask> FindAsync(int id)
        {
            return db.Subtasks.FindAsync(id);
        }

        public Task<Subtask> Get(int id)
        {
            return db.Subtasks.FindAsync(id);
        }

        public IQueryable<Subtask> GetAll()
        {
            return db.Subtasks;
        }

        public Task<int> Update(int id, Subtask item)
        {
            db.Entry(item).State = EntityState.Modified;
            return db.SaveChangesAsync();
        }
    }
}