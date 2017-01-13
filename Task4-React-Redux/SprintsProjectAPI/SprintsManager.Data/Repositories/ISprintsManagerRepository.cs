﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SprintsManager.Data.Repositories
{
    public interface ISprintsManagerRepository<T> where T : class
    {
        T Create(T item);
        void Delete(int id);
        Task<T> Get(int id);
        IQueryable<T> GetAll();
        void Update(T item);
    }
}