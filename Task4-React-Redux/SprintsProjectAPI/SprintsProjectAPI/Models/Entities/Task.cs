﻿using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using SprintsProjectAPI.Converters;
using System.ComponentModel.DataAnnotations;

namespace SprintsProjectAPI.Models.Entities
{
    public class Task
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]      
        public Status Status { get; set; }
        [Required]
        public string Category { get; set; }
        public int SprintId { get; set; }
    }

    [JsonConverter(typeof(StatusConverter))]
    public enum Status
    {
        Open,
        InProgress,
        Closed
    }

}