using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Repositories;
using Threading = System.Threading.Tasks;

namespace SprintsProjectAPI.UnitsOfWork
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
