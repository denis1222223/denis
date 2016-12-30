using System.ComponentModel.DataAnnotations;

namespace SprintsProjectAPI.Models.Entities
{
    public class Subtask
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int TaskId { get; set; }
    }
}