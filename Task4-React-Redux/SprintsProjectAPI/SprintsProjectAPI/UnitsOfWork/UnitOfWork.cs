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
        private IRepository<Sprint> sprintRepository;
        private IRepository<Task> taskRepository;
        private IRepository<Subtask> subtaskRepository;

        public UnitOfWork(SprintsProjectAPIContext db, 
            IRepository<Sprint> sprintRepository, 
            IRepository<Task> taskRepository,
            IRepository<Subtask> subtaskRepository
            )
        {
            this.db = db;

            sprintRepository.DBContext = db;
            this.sprintRepository = sprintRepository;

            taskRepository.DBContext = db;
            this.taskRepository = taskRepository;

            subtaskRepository.DBContext = db;
            this.subtaskRepository = subtaskRepository;
        }

        public IRepository<Sprint> Sprints
        {
            get
            {
                return sprintRepository;
            }
        }

        public IRepository<Task> Tasks
        {
            get
            {
                return taskRepository;
            }
        }

        public IRepository<Subtask> Subtasks
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