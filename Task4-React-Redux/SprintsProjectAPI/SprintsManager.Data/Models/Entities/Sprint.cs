using System.ComponentModel.DataAnnotations;

namespace SprintsManager.Data.Models.Entities
{
    public class Sprint
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string StartDate { get; set; }
        [Required]
        public string EndDate { get; set; }
    }
}