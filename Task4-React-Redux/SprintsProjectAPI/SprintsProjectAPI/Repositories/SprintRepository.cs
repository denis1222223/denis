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
    public class SprintRepository : IRepository<Sprint>
    {
        private SprintsProjectAPIContext db;

        public SprintsProjectAPIContext DBContext
        {
            set { db = value; }
        }

        public Sprint Create(Sprint item)
        {
            return db.Sprints.Add(item);
        }

        public Sprint Delete(Sprint item)
        {
            return db.Sprints.Remove(item);
        }

        public bool Exists(int id)
        {
            return db.Sprints.Count(e => e.Id == id) > 0;
        }

        public Task<Sprint> Get(int id)
        {
            return db.Sprints.FindAsync(id);
        }

        public IQueryable<Sprint> GetAll()
        {
            return db.Sprints;
        }

        public void Update(Sprint item)
        {
            db.Entry(item).State = EntityState.Modified;
        }
    }
}