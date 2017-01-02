using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using SprintsProjectAPI.Models.Entities;
using SprintsProjectAPI.Services;
using AutoMapper;
using SprintsProjectAPI.Models.DTO;

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
            if (id != subtask.Id)
            {
                return BadRequest();
            }

            await service.Update(subtask);

            return Ok(subtask);
        }
        
        public async Task<IHttpActionResult> PostSubtask(SubtaskDTO subtaskDTO)
        {
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