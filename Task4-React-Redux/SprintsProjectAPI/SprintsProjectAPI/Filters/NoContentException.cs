﻿using System;

namespace SprintsManager.Filters
{
    public class NoContentException : Exception
    {
        public NoContentException() : base("Requested entity does not exist") { }
    }
}