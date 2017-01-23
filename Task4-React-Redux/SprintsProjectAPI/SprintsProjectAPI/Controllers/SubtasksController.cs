using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using SprintsManager.Models.DTO;

using SprintsManager.Data.Models.Entities;
using SprintsManager.Business.Services;

namespace SprintsManager.Controllers
{
    public class SubtasksController : ApiController
    {
        private IService<Subtask> service;

        public SubtasksController(IService<Subtask> service)
        {
            this.service = service;
        }

        [Authorize]
        public IQueryable<Subtask> GetSubtasks()
        {
            return service.GetAll();
        }

        [Authorize]
        public async Task<IHttpActionResult> GetSubtask(int id)
        {
            Subtask subtask = await service.Get(id);
            if (subtask == null)
            {
                return NotFound();
            }

            return Ok(subtask);
        }

        [Authorize(Roles = "admin")]
        public async Task<IHttpActionResult> PutSubtask(int id, Subtask subtask)
        {
            if (id != subtask.Id)
            {
                return BadRequest();
            }

            await service.Update(subtask);

            return Ok(subtask);
        }

        [Authorize(Roles = "admin")]
        public async Task<IHttpActionResult> PostSubtask(SubtaskDTO subtaskDTO)
        {
            var subtask = Mapper.Map<SubtaskDTO, Subtask>(subtaskDTO);
            await service.Create(subtask);
            return Ok(subtask);
        }

        [Authorize(Roles = "admin")]
        public async Task<IHttpActionResult> DeleteSubtask(int id)
        {
            await service.Delete(id);
            return Ok(id);
        }
        
        [Route("api/subtasks/byTaskId/{id}")]
        public IQueryable<Subtask> GetSubtasksByTaskId(int id)
        {
            return service.GetAll().Where(subtask => subtask.TaskId == id);
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