using System.ComponentModel.DataAnnotations;

namespace SprintsProjectAPI.Models.DTO
{
    public class SubtaskDTO
    {
        public int? Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int TaskId { get; set; }
    }
}