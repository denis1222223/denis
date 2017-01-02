using System;

namespace SprintsProjectAPI.Filters
{
    public class ValidationException : Exception
    {
        public ValidationException() { }
        public ValidationException(string message) : base(message) { }
    }
}