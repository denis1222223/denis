using SprintsManager.Models.Entities;
using SprintsManager.Repositories;
using Threading = System.Threading.Tasks;

namespace SprintsManager.UnitsOfWork
{
    public interface IUnitOfWork
    {
        ISprintsManagerRepository<Sprint> Sprints { get; }
        ISprintsManagerRepository<Task> Tasks { get; }
        ISprintsManagerRepository<Subtask> Subtasks { get; }
        Threading.Task SaveChanges();
        void Dispose();
    }
}
