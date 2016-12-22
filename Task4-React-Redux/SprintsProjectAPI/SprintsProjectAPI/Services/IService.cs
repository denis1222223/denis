using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SprintsProjectAPI.Services
{
    interface IService<T> : IDisposable
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
