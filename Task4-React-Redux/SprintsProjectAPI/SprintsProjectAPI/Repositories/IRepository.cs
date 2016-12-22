using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace SprintsProjectAPI.Repositories
{
    internal interface IRepository<T> : IDisposable
        where T : class
    {
        IQueryable<T> GetAll();
        Task<T> Get(int id);
        Task<int> Create(T item);
        Task<int> Update(int id, T item);
        Task<int> Delete(T item);
        bool Exists(int id);
        Task<T> FindAsync(int id);
    }
}