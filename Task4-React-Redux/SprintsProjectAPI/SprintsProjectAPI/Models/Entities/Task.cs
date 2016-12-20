using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.Models.Entities
{
    public class Task
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string Category { get; set; }
        public int SprintId { get; set; }
    }
}