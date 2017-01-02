using SprintsProjectAPI.Models;
using SprintsProjectAPI.Models.Entities;
using Threading = System.Threading.Tasks;
using SprintsProjectAPI.Repositories;
using System;

namespace SprintsProjectAPI.UnitsOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private SprintsProjectAPIContext db;
        private ISprintsManagerRepository<Sprint> sprintRepository;
        private ISprintsManagerRepository<Task> taskRepository;
        private ISprintsManagerRepository<Subtask> subtaskRepository;

        public UnitOfWork(SprintsProjectAPIContext db,
            ISprintsManagerRepository<Sprint> sprintRepository,
            ISprintsManagerRepository<Task> taskRepository,
            ISprintsManagerRepository<Subtask> subtaskRepository
            )
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

        public void Dispose()
        {
            db.Dispose();
        }

        public async Threading.Task SaveChanges()
        {         
            try
            {
                await db.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}