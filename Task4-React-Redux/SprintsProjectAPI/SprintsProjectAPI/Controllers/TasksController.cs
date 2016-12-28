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
    public class TasksController : ApiController
    {
        private IService<Models.Entities.Task> service;

        public TasksController(IService<Models.Entities.Task> service)
        {
            this.service = service;
        }

        public IQueryable<Models.Entities.Task> GetTasks()
        {
            return service.GetAll();
        }

        public async Task<IHttpActionResult> GetTask(int id)
        {
            Models.Entities.Task task = await service.Get(id);
            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

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

            var success = await service.Update(task);
            if (success)
            {
                return Ok(task);
            }
            else
            {
                if (!service.Exists(task.Id))
                {
                    return NotFound();
                }
            }

            return InternalServerError();
        }

        public async Task<IHttpActionResult> PostTask(TaskDTO taskDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var task = Mapper.Map<TaskDTO, Models.Entities.Task>(taskDTO);

            var success = await service.Create(task);
            if (success)
            {
                return Ok(task);
                //return CreatedAtRoute("DefaultApi", new { id = task.Id }, task);
            }

            return InternalServerError();
        }

        public async Task<IHttpActionResult> DeleteTask(int id)
        {
            Models.Entities.Task task = await service.Get(id);
            if (task == null)
            {
                return NotFound();
            }

            var success = await service.Delete(task);
            if (success)
            {
                return Ok(task);
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