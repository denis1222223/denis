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
using System.Web.Http.Cors;
using SprintsProjectAPI.Services;
using SprintsProjectAPI.Models.Entities;
using AutoMapper;

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
        public async Task<IHttpActionResult> PutSprint(Sprint sprint)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var success = await service.Update(sprint);
            if (success)
            {
                return Ok(sprint);
            }
            else
            {
                if (!service.Exists(sprint.Id))
                {
                    return NotFound();
                }
            }

            return InternalServerError();
        }

        // POST: api/Sprints
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> PostSprint(SprintDTO sprintDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sprint = Mapper.Map<SprintDTO, Sprint>(sprintDTO);

            var success = await service.Create(sprint);
            if (success)
            {
                return Ok(sprint);
                //return CreatedAtRoute("DefaultApi", new { id = sprint.Id }, sprint);
            }

            return InternalServerError();      
        }

        // DELETE: api/Sprints/5
        [ResponseType(typeof(Sprint))]
        public async Task<IHttpActionResult> DeleteSprint(int id)
        {
            Sprint sprint = await service.Get(id);
            if (sprint == null)
            {
                return NotFound();
            }

            var success = await service.Delete(sprint);
            if (success)
            {
                return Ok(sprint);
            }

            return InternalServerError();
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