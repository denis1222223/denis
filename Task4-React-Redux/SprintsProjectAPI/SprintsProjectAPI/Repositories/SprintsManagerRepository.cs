using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using SprintsProjectAPI.Models;
using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Repositories;

namespace SprintsProjectAPI.Repositories
{
    public class SprintsManagerRepository<T> : ISprintsManagerRepository<T> where T : class
    {
        private SprintsProjectAPIContext db;

        public SprintsManagerRepository(SprintsProjectAPIContext db)
        {
            this.db = db;
        }

        public T Create(T item)
        {
            return db.Set<T>().Add(item);
        }

        public T Delete(T item)
        {
            return db.Set<T>().Remove(item);
        }

        public Task<T> Get(int id)
        {
            return db.Set<T>().FindAsync(id);
        }

        public IQueryable<T> GetAll()
        {
            return db.Set<T>();
        }

        public void Update(T item)
        {
            db.Entry(item).State = EntityState.Modified;
        }
    }
}