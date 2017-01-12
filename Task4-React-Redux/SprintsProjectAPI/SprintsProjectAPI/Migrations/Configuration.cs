namespace SprintsProjectAPI.Migrations
{
    using SprintsManager.Data.Models;
    using SprintsManager.Data.Models.Entities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<SprintsManagerContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(SprintsManagerContext context)
        {
            context.Sprints.AddOrUpdate(
               new Sprint { Id = 1, Name = "sprint 1", StartDate = "01/09/2017", EndDate = "01/09/2017" },
               new Sprint { Id = 2, Name = "sprint 2", StartDate = "12/01/2016", EndDate = "12/21/2016" },
               new Sprint { Id = 3, Name = "sprint 3", StartDate = "12/01/2016", EndDate = "12/21/2016" },
               new Sprint { Id = 4, Name = "sprint 4", StartDate = "01/09/2017", EndDate = "01/09/2017" }
            );

            context.Tasks.AddOrUpdate(
                new Task { Id = 1, Name = "task A", Category = "category 1", Status = Status.Open, SprintId = 1 },
                new Task { Id = 2, Name = "task B", Category = "category 2", Status = Status.InProgress, SprintId = 2 },
                new Task { Id = 3, Name = "task C", Category = "category 3", Status = Status.InProgress, SprintId = 3 },
                new Task { Id = 4, Name = "task D", Category = "category 1", Status = Status.Closed, SprintId = 4 }
            );

            context.Subtasks.AddOrUpdate(
                new Subtask { Id = 1, Name = "run", TaskId = 1 },
                new Subtask { Id = 2, Name = "swim", TaskId = 2 },
                new Subtask { Id = 3, Name = "jump", TaskId = 3 },
                new Subtask { Id = 4, Name = "dance", TaskId = 4 }
            );

            context.SaveChanges();
        }
    }
}
