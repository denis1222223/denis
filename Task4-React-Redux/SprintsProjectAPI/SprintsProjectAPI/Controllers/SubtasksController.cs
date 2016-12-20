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
    public class SubtasksController : ApiController
    {
        private IRepository<Subtask> db;

        public SubtasksController()
        {
            db = new SubtaskRepository();
        }

        // GET: api/Subtasks
        public IQueryable<Subtask> GetSubtasks()
        {
            return db.GetAll();
        }

        // GET: api/Subtasks/5
        [ResponseType(typeof(Subtask))]
        public async Task<IHttpActionResult> GetSubtask(int id)
        {
            Subtask subtask = await db.Get(id);
            if (subtask == null)
            {
                return NotFound();
            }

            return Ok(subtask);
        }

        // PUT: api/Subtasks/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSubtask(int id, Subtask subtask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subtask.Id)
            {
                return BadRequest();
            }

            try
            {
                await db.Update(id, subtask);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubtaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(subtask);
        }

        // POST: api/Subtasks
        [ResponseType(typeof(Subtask))]
        public async Task<IHttpActionResult> PostSubtask(Subtask subtask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await db.Create(subtask);

            return CreatedAtRoute("DefaultApi", new { id = subtask.Id }, subtask);
        }

        // DELETE: api/Subtasks/5
        [ResponseType(typeof(Subtask))]
        public async Task<IHttpActionResult> DeleteSubtask(int id)
        {
            Subtask subtask = await db.FindAsync(id);
            if (subtask == null)
            {
                return NotFound();
            }

            await db.Delete(subtask);

            return Ok(subtask);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubtaskExists(int id)
        {
            return db.Exists(id);
        }
    }
}