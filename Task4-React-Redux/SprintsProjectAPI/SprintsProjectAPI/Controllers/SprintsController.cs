using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using SprintsManager.Models.DTO;

using SprintsManager.Data.Models.Entities;
using SprintsManager.Business.Services;

namespace SprintsManager.Controllers
{
    public class SprintsController : ApiController
    {
        private IService<Sprint> service;

        public SprintsController(IService<Sprint> service)
        {
            this.service = service;
        }

        [Authorize]
        public IQueryable<Sprint> GetSprints()
        {
            return service.GetAll();
        }

        [Authorize]
        public async Task<IHttpActionResult> GetSprint(int id)
        {
            Sprint sprint = await service.Get(id);
            if (sprint == null)
            {
                return NotFound();
            }

            return Ok(sprint);
        }

        [Authorize(Roles = "admin")]
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

        [Authorize(Roles = "admin")]
        public async Task<IHttpActionResult> PostSprint(SprintDTO sprintDTO)
        {
            var sprint = Mapper.Map<SprintDTO, Sprint>(sprintDTO);
            await service.Create(sprint);
            return Ok(sprint);     
        }

        [Authorize(Roles = "admin")]
        public async Task<IHttpActionResult> DeleteSprint(int id)
        {
            await service.Delete(id);
            return Ok(id);
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