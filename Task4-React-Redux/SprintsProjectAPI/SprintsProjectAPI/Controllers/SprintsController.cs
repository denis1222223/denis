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

            await service.Update(sprint);

            return Ok(sprint);
        }

        public async Task<IHttpActionResult> PostSprint(SprintDTO sprintDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sprint = Mapper.Map<SprintDTO, Sprint>(sprintDTO);
            await service.Create(sprint);
            return Ok(sprint);     
        }

        public async Task<IHttpActionResult> DeleteSprint(int id)
        {
            Sprint sprint = await service.Get(id);
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