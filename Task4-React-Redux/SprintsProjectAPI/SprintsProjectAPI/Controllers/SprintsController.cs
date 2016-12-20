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
    public class SprintsController : ApiController
    {
        private IRepository<Sprint> db;

        public SprintsController()
        {
            db = new SprintRepository();
        }

        // GET: api/Sprints
        public IQueryable<Sprint> GetSprints()
        {
            return db.GetAll();
        }

        // GET: api/Sprints/5
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> GetSprint(int id)
        {
            Sprint sprint = await db.Get(id);
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

            try
            {
                await db.Update(id, sprint);
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

            return Ok(sprint);
        }

        // POST: api/Sprints
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> PostSprint(Sprint sprint)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await db.Create(sprint);

            return CreatedAtRoute("DefaultApi", new { id = sprint.Id }, sprint);
        }

        // DELETE: api/Sprints/5
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> DeleteSprint(int id)
        {
            Sprint sprint = await db.FindAsync(id);
            if (sprint == null)
            {
                return NotFound();
            }

            await db.Delete(sprint);

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
            return db.Exists(id);
        }
    }
}