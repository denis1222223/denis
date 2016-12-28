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
using AutoMapper;

namespace SprintsProjectAPI.Controllers
{
    [EnableCors(origins: "http://localhost:3001", headers: "*", methods: "*")]
    public class SubtasksController : ApiController
    {
        private IService<Subtask> service;

        public SubtasksController(IService<Subtask> service)
        {
            this.service = service;
        }

        // GET: api/Subtasks
        public IQueryable<Subtask> GetSubtasks()
        {
            return service.GetAll();
        }

        // GET: api/Subtasks/5
        [ResponseType(typeof(Subtask))]
        public async Task<IHttpActionResult> GetSubtask(int id)
        {
            Subtask subtask = await service.Get(id);
            if (subtask == null)
            {
                return NotFound();
            }

            return Ok(subtask);
        }

        // PUT: api/Subtasks/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSubtask(Subtask subtask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var success = await service.Update(subtask);
            if (success)
            {
                return Ok(subtask);
            }
            else
            {
                if (!service.Exists(subtask.Id))
                {
                    return NotFound();
                }
            }

            return InternalServerError();
        }

        // POST: api/Subtasks
        [ResponseType(typeof(Subtask))]
        public async Task<IHttpActionResult> PostSubtask(SubtaskDTO subtaskDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subtask = Mapper.Map<SubtaskDTO, Subtask>(subtaskDTO);

            var success = await service.Create(subtask);
            if (success)
            {
                return Ok(subtask);
                //return CreatedAtRoute("DefaultApi", new { id = subtask.Id }, subtask);
            }
            return InternalServerError();
        }

        // DELETE: api/Subtasks/5
        [ResponseType(typeof(Subtask))]
        public async Task<IHttpActionResult> DeleteSubtask(int id)
        {
            Subtask subtask = await service.Get(id);
            if (subtask == null)
            {
                return NotFound();
            }

            var success = await service.Delete(subtask);
            if (success)
            {
                return Ok(subtask);
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