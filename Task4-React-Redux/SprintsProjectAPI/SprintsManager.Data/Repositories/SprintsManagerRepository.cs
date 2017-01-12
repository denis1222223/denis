using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
//using SprintsManager.Filters;
using SprintsManager.Data.Models;

namespace SprintsManager.Data.Repositories
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

        public void Delete(int id)
        {
            T item = dbSet.Find(id);
            if (item == null)
            {
 //               throw new NoContentException(id);
            }
            db.Entry(item).State = EntityState.Deleted;
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