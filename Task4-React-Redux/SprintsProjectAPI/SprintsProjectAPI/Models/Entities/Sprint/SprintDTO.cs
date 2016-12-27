using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.Models.Entities
{
    public class SprintDTO
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string BeginningDate { get; set; }
        public string ExpirationDate { get; set; }
    }
}