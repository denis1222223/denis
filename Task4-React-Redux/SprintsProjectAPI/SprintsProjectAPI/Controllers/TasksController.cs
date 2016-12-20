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

namespace SprintsProjectAPI.Controllers
{
    [EnableCors(origins: "http://localhost:3001", headers: "*", methods: "*")]
    public class TasksController : ApiController
    {
        private IRepository<Models.Entities.Task> db;

        public TasksController()
        {
            db = new TaskRepository();
        }

        // GET: api/Tasks
        public IQueryable<Models.Entities.Task> GetTasks()
        {
            return db.GetAll();
        }

        // GET: api/Tasks/5
        [ResponseType(typeof(Models.Entities.Task))]
        public async Task<IHttpActionResult> GetTask(int id)
        {
            Models.Entities.Task task = await db.Get(id);
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
                await db.Update(id, task);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskExists(id))
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

            await db.Create(task);

            return CreatedAtRoute("DefaultApi", new { id = task.Id }, task);
        }

        // DELETE: api/Tasks/5
        [ResponseType(typeof(Models.Entities.Task))]
        public async Task<IHttpActionResult> DeleteTask(int id)
        {
            Models.Entities.Task task = await db.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            await db.Delete(task);

            return Ok(task);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TaskExists(int id)
        {
            return db.Exists(id);
        }
    }
}