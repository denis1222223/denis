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
    public class SprintRepository : IRepository<Sprint>
    {
        private SprintsProjectAPIContext db;

        public SprintRepository(SprintsProjectAPIContext db)
        {
            this.db = db;
        }

        public Task<int> Create(Sprint item)
        {
            db.Sprints.Add(item);
            return db.SaveChangesAsync();
        }

        public Task<int> Delete(Sprint item)
        {
            db.Sprints.Remove(item);
            return db.SaveChangesAsync();
        }

        public void Dispose()
        {
            db.Dispose();
        }

        public bool Exists(int id)
        {
            return db.Sprints.Count(e => e.Id == id) > 0;
        }

        public Task<Sprint> FindAsync(int id)
        {
            return db.Sprints.FindAsync(id);
        }

        public Task<Sprint> Get(int id)
        {
            return db.Sprints.FindAsync(id);
        }

        public IQueryable<Sprint> GetAll()
        {
            return db.Sprints;
        }

        public Task<int> Update(int id, Sprint item)
        {
            db.Entry(item).State = EntityState.Modified;
            return db.SaveChangesAsync();
        }
    }
}