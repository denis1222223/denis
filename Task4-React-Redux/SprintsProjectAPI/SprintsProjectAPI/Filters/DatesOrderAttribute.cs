using System;
using System.ComponentModel.DataAnnotations;

namespace SprintsManager.Filters
{
    public class DatesOrderAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object endDate, ValidationContext validationContext)
        {
            var startDateInfo = validationContext.ObjectType.GetProperty("StartDate");
            var startDate = startDateInfo.GetValue(validationContext.ObjectInstance);

            bool valid = ValidateDates((string)startDate, (string)endDate);
            if (!valid)
            {
                return new ValidationResult("Start date should be less than end date");
            }
            return null;
        }

        private bool ValidateDates(string startDateString, string endDateString)
        {
            var startDate = DateTime.Parse(startDateString);
            var endDate = DateTime.Parse(endDateString);
            var compare = DateTime.Compare(endDate, startDate);
            if (compare < 0)
            {
                return false;
            }
            return true;
        }
    }
}