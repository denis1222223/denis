using System.Linq;
using System.Threading.Tasks;

namespace SprintsManager.Services
{
    public interface IService<T>
        where T : class
    {
        IQueryable<T> GetAll();
        Task<T> Get(int id);
        Task<T> Create(T item);
        Task Update(T item);
        Task Delete(T item);
        void Dispose();
    }
}
