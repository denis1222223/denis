using SprintsManager.Models.Entities;
using System.Data.Entity;

namespace SprintsManager.Models
{
    public class SprintsManagerContext : DbContext
    {
        public SprintsManagerContext() : base("name=SprintsManagerContext")
        {
        }

        public DbSet<Sprint> Sprints { get; set; }

        public DbSet<Subtask> Subtasks { get; set; }

        public DbSet<Task> Tasks { get; set; }
    }
}
