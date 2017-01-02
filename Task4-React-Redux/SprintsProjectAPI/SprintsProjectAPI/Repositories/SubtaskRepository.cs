using SprintsProjectAPI.Models.Entities;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
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

        public Subtask Create(Subtask item)
        {
            return db.Subtasks.Add(item);
        }

        public Subtask Delete(Subtask item)
        {
            return db.Subtasks.Remove(item);
        }

        public bool Exists(int id)
        {
            return db.Subtasks.Count(e => e.Id == id) > 0;
        }

        public Task<Subtask> Get(int id)
        {
            return db.Subtasks.FindAsync(id);
        }

        public IQueryable<Subtask> GetAll()
        {
            return db.Subtasks;
        }

        public void Update(Subtask item)
        {
            db.Entry(item).State = EntityState.Modified;
        }
    }
}