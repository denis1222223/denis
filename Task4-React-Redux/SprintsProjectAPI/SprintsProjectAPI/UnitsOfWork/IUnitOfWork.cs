using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Repositories;
using Threading = System.Threading.Tasks;

namespace SprintsProjectAPI.UnitsOfWork
{
    public interface IUnitOfWork
    {
        IRepository<Sprint> Sprints { get; }
        IRepository<Task> Tasks { get; }
        IRepository<Subtask> Subtasks { get; }
        Threading.Task SaveChanges();
        void Dispose();
    }
}
