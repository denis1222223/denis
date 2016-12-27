using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SprintsProjectAPI.Services
{
    public interface IService<T>
        where T : class
    {
        IQueryable<T> GetAll();
        Task<T> Get(int id);
        Task<bool> Create(T item);
        Task<bool> Update(T item);
        Task<bool> Delete(T item);
        bool Exists(int id);
        void Dispose();
    }
}
