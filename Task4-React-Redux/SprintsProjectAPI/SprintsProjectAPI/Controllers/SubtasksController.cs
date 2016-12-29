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
    public class SubtasksController : ApiController
    {
        private IService<Subtask> service;

        public SubtasksController(IService<Subtask> service)
        {
            this.service = service;
        }

        public IQueryable<Subtask> GetSubtasks()
        {
            return service.GetAll();
        }

        public async Task<IHttpActionResult> GetSubtask(int id)
        {
            Subtask subtask = await service.Get(id);
            if (subtask == null)
            {
                return NotFound();
            }

            return Ok(subtask);
        }
        
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

            await service.Update(subtask);

            return Ok(subtask);
        }
        
        public async Task<IHttpActionResult> PostSubtask(SubtaskDTO subtaskDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subtask = Mapper.Map<SubtaskDTO, Subtask>(subtaskDTO);
            await service.Create(subtask);
            return Ok(subtask);
        }
        
        public async Task<IHttpActionResult> DeleteSubtask(int id)
        {
            Subtask subtask = await service.Get(id);
            if (subtask == null)
            {
                return NotFound();
            }

            await service.Delete(subtask);

            return Ok(subtask);
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