using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Task = SprintsManager.Data.Models.Entities.Task;
using AutoMapper;
using SprintsManager.Models.DTO;
using SprintsManager.Business.Services;

namespace SprintsManager.Controllers
{
    public class TasksController : ApiController
    {
        private IService<Task> service;

        public TasksController(IService<Task> service)
        {
            this.service = service;
        }

        public IQueryable<Task> GetTasks()
        {
            return service.GetAll();
        }

        public async Task<IHttpActionResult> GetTask(int id)
        {
            Task task = await service.Get(id);
            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        public async Task<IHttpActionResult> PutTask(int id, Task task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            await service.Update(task);

            return Ok(task);
        }

        public async Task<IHttpActionResult> PostTask(TaskDTO taskDTO)
        {
            var task = Mapper.Map<TaskDTO, Task>(taskDTO);
            await service.Create(task);
            return Ok(task);
        }

        public async Task<IHttpActionResult> DeleteTask(int id)
        {
            await service.Delete(id);
            return Ok(id);    
        }

        [Route("api/tasks/bySprintId/{id}")]
        public IQueryable<Task> GetTasksBySprintId(int id)
        {
            return service.GetAll().Where(task => task.SprintId == id);
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