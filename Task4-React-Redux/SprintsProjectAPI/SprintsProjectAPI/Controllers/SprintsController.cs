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

namespace SprintsProjectAPI.Controllers
{
    public class SprintsController : ApiController
    {
        private SprintsProjectAPIContext db = new SprintsProjectAPIContext();

        // GET: api/Sprints
        public IQueryable<Sprint> GetSprints()
        {
            return db.Sprints;
        }

        // GET: api/Sprints/5
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> GetSprint(int id)
        {
            Sprint sprint = await db.Sprints.FindAsync(id);
            if (sprint == null)
            {
                return NotFound();
            }

            return Ok(sprint);
        }

        // PUT: api/Sprints/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSprint(int id, Sprint sprint)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sprint.Id)
            {
                return BadRequest();
            }

            db.Entry(sprint).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SprintExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Sprints
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> PostSprint(Sprint sprint)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Sprints.Add(sprint);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = sprint.Id }, sprint);
        }

        // DELETE: api/Sprints/5
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> DeleteSprint(int id)
        {
            Sprint sprint = await db.Sprints.FindAsync(id);
            if (sprint == null)
            {
                return NotFound();
            }

            db.Sprints.Remove(sprint);
            await db.SaveChangesAsync();

            return Ok(sprint);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SprintExists(int id)
        {
            return db.Sprints.Count(e => e.Id == id) > 0;
        }
    }
}