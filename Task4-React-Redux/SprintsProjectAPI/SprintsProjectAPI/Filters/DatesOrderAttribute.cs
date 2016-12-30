using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.Filters
{
    public class DatesOrderAttribute : ValidationAttribute
    {
        private bool ValidateDates(string beginningDateString, string expirationDateString)
        {
            var beginningDate = DateTime.Parse(beginningDateString);
            var expirationDate = DateTime.Parse(expirationDateString);
            var compare = DateTime.Compare(expirationDate, beginningDate);
            if (compare < 0)
            {
                return false;
            }
            return true;
        }

        protected override ValidationResult IsValid(object expirationDate, ValidationContext validationContext)
        {
            var beginningDateInfo = validationContext.ObjectType.GetProperty("BeginningDate");
            var beginningDate = beginningDateInfo.GetValue(validationContext.ObjectInstance);

            bool valid = ValidateDates((string)beginningDate, (string)expirationDate);
            if (!valid)
            {
                return new ValidationResult("Not valid dates order");
            }
            return null;
        }
    }
}