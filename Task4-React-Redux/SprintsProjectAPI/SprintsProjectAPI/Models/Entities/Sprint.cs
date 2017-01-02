﻿using System.ComponentModel.DataAnnotations;

namespace SprintsProjectAPI.Models.Entities
{
    public class Sprint
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string BeginningDate { get; set; }
        [Required]
        public string ExpirationDate { get; set; }
    }
}