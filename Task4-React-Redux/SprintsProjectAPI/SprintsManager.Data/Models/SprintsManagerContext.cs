using SprintsManager.Data.Models.Entities;
using System.Data.Entity;

namespace SprintsManager.Data.Models
{
    public class SprintsManagerContext : DbContext
    {
        public SprintsManagerContext()
        {
        }

        public DbSet<Sprint> Sprints { get; set; }

        public DbSet<Subtask> Subtasks { get; set; }

        public DbSet<Task> Tasks { get; set; }
    }
}
