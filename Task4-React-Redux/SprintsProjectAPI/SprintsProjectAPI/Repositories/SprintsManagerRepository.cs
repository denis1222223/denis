using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using SprintsManager.Models;
using SprintsManager.Models.Entities;
using SprintsManager.Repositories;

namespace SprintsManager.Repositories
{
    public class SprintsManagerRepository<T> : ISprintsManagerRepository<T> where T : class
    {
        private SprintsManagerContext db;
        private DbSet<T> dbSet;
        public SprintsManagerRepository(SprintsManagerContext db)
        {
            this.db = db;
            dbSet = db.Set<T>();
        }

        public T Create(T item)
        {
            return dbSet.Add(item);
        }

        public T Delete(T item)
        {
            return dbSet.Remove(item);
        }

        public Task<T> Get(int id)
        {
            return dbSet.FindAsync(id);
        }

        public IQueryable<T> GetAll()
        {
            return dbSet;
        }

        public void Update(T item)
        {
            db.Entry(item).State = EntityState.Modified;
        }
    }
}