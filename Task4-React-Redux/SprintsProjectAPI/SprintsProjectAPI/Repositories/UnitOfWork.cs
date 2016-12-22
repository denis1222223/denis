using SprintsProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.Repositories
{
    public class UnitOfWork : IDisposable
    {
        private SprintsProjectAPIContext db = new SprintsProjectAPIContext();
        private SprintRepository sprintRepository;
        private TaskRepository taskRepository;
        private SubtaskRepository subtaskRepository;

        public SprintRepository Sprints
        {
            get
            {
                if (sprintRepository == null)
                    sprintRepository = new SprintRepository(db);
                return sprintRepository;
            }
        }

        public TaskRepository Tasks
        {
            get
            {
                if (taskRepository == null)
                    taskRepository = new TaskRepository(db);
                return taskRepository;
            }
        }

        public SubtaskRepository Subtasks
        {
            get
            {
                if (subtaskRepository == null)
                    subtaskRepository = new SubtaskRepository(db);
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