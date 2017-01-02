using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using SprintsProjectAPI.Services;
using SprintsProjectAPI.Models.Entities;
using AutoMapper;
using SprintsProjectAPI.Models.DTO;

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

        public async Task<IHttpActionResult> PutSprint(int id, SprintDTO sprintDTO)
        {
            var sprint = Mapper.Map<SprintDTO, Sprint>(sprintDTO);

            if (id != sprint.Id)
            {
                return BadRequest();
            }

            await service.Update(sprint);

            return Ok(sprint);
        }

        public async Task<IHttpActionResult> PostSprint(SprintDTO sprintDTO)
        {
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