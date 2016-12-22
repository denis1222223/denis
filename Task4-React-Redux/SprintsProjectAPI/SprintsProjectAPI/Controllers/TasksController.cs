using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using SprintsProjectAPI.Models;
using SprintsProjectAPI.Models.Entities;
using System.Web.Http.Cors;
using SprintsProjectAPI.Repositories;
using SprintsProjectAPI.Services;

namespace SprintsProjectAPI.Controllers
{
    [EnableCors(origins: "http://localhost:3001", headers: "*", methods: "*")]
    public class TasksController : ApiController
    {
        private IService<Models.Entities.Task> service;

        public TasksController()
        {
            service = new TaskService();
        }

        // GET: api/Tasks
        public IQueryable<Models.Entities.Task> GetTasks()
        {
            return service.GetAll();
        }

        // GET: api/Tasks/5
        [ResponseType(typeof(Models.Entities.Task))]
        public async Task<IHttpActionResult> GetTask(int id)
        {
            Models.Entities.Task task = await service.Get(id);
            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        // PUT: api/Tasks/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTask(int id, Models.Entities.Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != task.Id)
            {
                return BadRequest();
            }

            try
            {
                await service.Update(id, task);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!service.Exists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(task);
        }

        // POST: api/Tasks
        [ResponseType(typeof(Models.Entities.Task))]
        public async Task<IHttpActionResult> PostTask(Models.Entities.Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await service.Create(task);

            return CreatedAtRoute("DefaultApi", new { id = task.Id }, task);
        }

        // DELETE: api/Tasks/5
        [ResponseType(typeof(Models.Entities.Task))]
        public async Task<IHttpActionResult> DeleteTask(int id)
        {
            Models.Entities.Task task = await service.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            await service.Delete(task);

            return Ok(task);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                service.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}