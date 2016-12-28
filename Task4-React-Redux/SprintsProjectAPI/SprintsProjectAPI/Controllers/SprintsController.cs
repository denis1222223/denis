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
    public class SprintsController : ApiController
    {
        private IService<Sprint> service;

        public SprintsController(IService<Sprint> service)
        {
            this.service = service;
        }

        public IQueryable<Sprint> GetSprints()
        {
            return service.GetAll();
        }

        public async Task<IHttpActionResult> GetSprint(int id)
        {
            Sprint sprint = await service.Get(id);
            if (sprint == null)
            {
                return NotFound();
            }

            return Ok(sprint);
        }

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

        public async Task<IHttpActionResult> PostSprint(SprintDTO sprintDTO)
        {
            //var m = new HttpResponseMessage(HttpStatusCode.Gone);
            //throw new HttpResponseException(m);

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