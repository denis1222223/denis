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
    public class SprintsController : ApiController
    {
        private IService<Sprint> service;

        public SprintsController(IService<Sprint> service)
        {
            this.service = service;
        }

        // GET: api/Sprints
        public IQueryable<Sprint> GetSprints()
        {
            return service.GetAll();
        }

        // GET: api/Sprints/5
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> GetSprint(int id)
        {
            Sprint sprint = await service.Get(id);
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
                await service.Update(id, sprint);
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

            await service.Create(sprint);

            return CreatedAtRoute("DefaultApi", new { id = sprint.Id }, sprint);
        }

        // DELETE: api/Sprints/5
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> DeleteSprint(int id)
        {
            Sprint sprint = await service.FindAsync(id);
            if (sprint == null)
            {
                return NotFound();
            }

            await service.Delete(sprint);

            return Ok(sprint);
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