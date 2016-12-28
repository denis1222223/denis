using Ninject;
using SprintsProjectAPI.Models;
using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;

namespace SprintsProjectAPI.UnitsOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private SprintsProjectAPIContext db;
        private IRepository<Sprint> sprintRepository;
        private IRepository<Models.Entities.Task> taskRepository;
        private IRepository<Subtask> subtaskRepository;

        public UnitOfWork(SprintsProjectAPIContext db, 
            IRepository<Sprint> sprintRepository, 
            IRepository<Models.Entities.Task> taskRepository,
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

        public IRepository<Models.Entities.Task> Tasks
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

        public async Task<bool> SaveChanges()
        {
            try
            {
                await db.SaveChangesAsync();
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}