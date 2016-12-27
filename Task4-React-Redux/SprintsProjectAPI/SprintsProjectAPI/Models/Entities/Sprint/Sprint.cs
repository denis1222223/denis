using System.ComponentModel.DataAnnotations;

namespace SprintsProjectAPI.Models.Entities
{
    public class Sprint
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string BeginningDate { get; set; }
        public string ExpirationDate { get; set; }
    }
}