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
        Task<T> Create(T item);
        Task Update(T item);
        Task Delete(T item);
        bool Exists(int id);
        void Dispose();
    }
}
