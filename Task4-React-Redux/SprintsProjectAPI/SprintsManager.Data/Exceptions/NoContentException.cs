using System;

namespace SprintsManager.Data.Exceptions
{
    public class NoContentException : Exception
    {
        public NoContentException() : base("Requested entity does not exist") { }

        public NoContentException(int id)
        {
            Data.Add("id", id);
        }
    }
}