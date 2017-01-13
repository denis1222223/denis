﻿using SprintsManager.Filters;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace SprintsManager.Models.DTO
{
    public class SprintDTO
    {
        public int? Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [StringLength(10)]
        public string StartDate { get; set; }
        [Required]
        [StringLength(10)]
        [DatesOrder]
        public string EndDate { get; set; }
    }
}