using SprintsProjectAPI.Filters;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace SprintsProjectAPI.Models.DTO
{
    public class SprintDTO
    {
        public int? Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [StringLength(10)]
        public string BeginningDate { get; set; }
        [Required]
        [StringLength(10)]
        [DatesOrder]
        public string ExpirationDate { get; set; }
    }
}