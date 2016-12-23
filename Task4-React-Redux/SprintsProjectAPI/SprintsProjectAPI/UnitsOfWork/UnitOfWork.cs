using Ninject;
using SprintsProjectAPI.Models;
using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.UnitsOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private IRepository<Sprint> sprintRepository;
        private IRepository<Models.Entities.Task> taskRepository;
        private IRepository<Subtask> subtaskRepository;

        public UnitOfWork(IRepository<Sprint> sprintRepository, IRepository<Models.Entities.Task> taskRepository, IRepository<Subtask> subtaskRepository)
        {
            this.sprintRepository = sprintRepository;
            this.taskRepository = taskRepository;
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
            if (sprintRepository != null)
            {
                sprintRepository.Dispose();
            }

            if (taskRepository != null)
            {
                taskRepository.Dispose();
            }

            if (subtaskRepository != null)
            {
                subtaskRepository.Dispose();
            }
        }
    }
}