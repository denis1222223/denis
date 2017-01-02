using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using SprintsProjectAPI.Models;
using Task = SprintsProjectAPI.Models.Entities.Task;

namespace SprintsProjectAPI.Repositories
{
    public class TaskRepository : IRepository<Task>
    {
        private SprintsProjectAPIContext db;

        public TaskRepository(SprintsProjectAPIContext db)
        {
            this.db = db;
        }

        public Task Create(Task item)
        {
            return db.Tasks.Add(item);
        }

        public Task Delete(Task item)
        {
            return db.Tasks.Remove(item);
        }

        public bool Exists(int id)
        {
            return db.Tasks.Count(e => e.Id == id) > 0;
        }

        public Task<Task> Get(int id)
        {
            return db.Tasks.FindAsync(id);
        }

        public IQueryable<Task> GetAll()
        {
            return db.Tasks;
        }

        public void Update(Task item)
        {
            db.Entry(item).State = EntityState.Modified;
        }
    }
}