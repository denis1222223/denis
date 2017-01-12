using Threading = System.Threading.Tasks;
using SprintsManager.Data.Repositories;
using SprintsManager.Data.Models.Entities;
using SprintsManager.Data.Models;

namespace SprintsManager.Data.UnitsOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private SprintsManagerContext db;
        private ISprintsManagerRepository<Sprint> sprintRepository;
        private ISprintsManagerRepository<Task> taskRepository;
        private ISprintsManagerRepository<Subtask> subtaskRepository;

        public UnitOfWork(SprintsManagerContext db,
            ISprintsManagerRepository<Sprint> sprintRepository,
            ISprintsManagerRepository<Task> taskRepository,
            ISprintsManagerRepository<Subtask> subtaskRepository)
        {
            this.db = db;
            this.sprintRepository = sprintRepository;
            this.taskRepository = taskRepository;
            this.subtaskRepository = subtaskRepository;
        }

        public ISprintsManagerRepository<Sprint> Sprints
        {
            get
            {
                return sprintRepository;
            }
        }

        public ISprintsManagerRepository<Task> Tasks
        {
            get
            {
                return taskRepository;
            }
        }

        public ISprintsManagerRepository<Subtask> Subtasks
        {
            get
            {
                return subtaskRepository;
            }
        }

        public async Threading.Task SaveChanges()
        {
            await db.SaveChangesAsync();
        }

        public void Dispose()
        {
            db.Dispose();
        }
    }
}