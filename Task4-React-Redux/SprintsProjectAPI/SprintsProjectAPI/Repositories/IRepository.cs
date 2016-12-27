using SprintsProjectAPI.Models;
using System;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace SprintsProjectAPI.Repositories
{
    public interface IRepository<T>
        where T : class
    {
        IQueryable<T> GetAll();
        Task<T> Get(int id);
        T Create(T item);
        T Delete(T item);
        void Update(T item);
        bool Exists(int id);
        SprintsProjectAPIContext DBContext { set; }
    }
}