using SprintsProjectAPI.Models.Entities;
using System.Data.Entity;

namespace SprintsProjectAPI.Models
{
    public class SprintsProjectAPIContext : DbContext
    {
        public SprintsProjectAPIContext() : base("name=SprintsProjectAPIContext")
        {
        }

        public DbSet<Sprint> Sprints { get; set; }

        public DbSet<Subtask> Subtasks { get; set; }

        public DbSet<Task> Tasks { get; set; }
    }
}
