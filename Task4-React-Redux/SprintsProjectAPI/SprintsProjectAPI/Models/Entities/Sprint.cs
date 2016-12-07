using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.Models.Entities
{
    public class Sprint
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string beginningDate { get; set; }
        public string expirationDate { get; set; }
    }
}