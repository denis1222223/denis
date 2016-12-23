using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SprintsProjectAPI.UnitsOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Sprint> Sprints { get; }
        IRepository<Models.Entities.Task> Tasks { get; }
        IRepository<Subtask> Subtasks { get; }
    }
}
