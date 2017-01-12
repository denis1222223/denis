using SprintsManager.Data.Models.Entities;
using SprintsManager.Data.Repositories;
using Threading = System.Threading.Tasks;

namespace SprintsManager.Data.UnitsOfWork
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
