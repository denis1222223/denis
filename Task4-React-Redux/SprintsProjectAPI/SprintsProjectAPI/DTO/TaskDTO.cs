using SprintsManager.Data.Models.Entities;
using System.ComponentModel.DataAnnotations;

namespace SprintsManager.Models.DTO
{
    public class TaskDTO
    {
        public int? Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public Status Status { get; set; }
        [Required]
        public string Category { get; set; }
        public int SprintId { get; set; }
    }
}