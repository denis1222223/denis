using SprintsProjectAPI.Models.Entities;
using System.ComponentModel.DataAnnotations;

namespace SprintsProjectAPI.Models.DTO
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