using System.ComponentModel.DataAnnotations;

namespace SprintsProjectAPI.Models.Entities
{
    public class Sprint
    {
        public int Id { get; set; }
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

    public class DatesOrderAttribute : ValidationAttribute
    {
        public DatesOrderAttribute(
            //int minLength, params string[] propertyNames
            )
        {
            //this.PropertyNames = propertyNames;
            //this.MinLength = minLength;
        }

        //public string[] PropertyNames { get; private set; }
        //public int MinLength { get; private set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {

            //var properties = this.PropertyNames.Select(validationContext.ObjectType.GetProperty);
            //var values = properties.Select(p => p.GetValue(validationContext.ObjectInstance, null)).OfType<string>();
            //var totalLength = values.Sum(x => x.Length) + Convert.ToString(value).Length;
            //if (totalLength < this.MinLength)
            //{
            //    return new ValidationResult(this.FormatErrorMessage(validationContext.DisplayName));
            //}

            return null;
        }
    }
}