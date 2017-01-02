using Newtonsoft.Json;
using SprintsProjectAPI.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.Converters
{
    public class StatusConverter : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return true;
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            return existingValue;
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            switch ((Status)value)
            {
                case Status.Open:
                    writer.WriteValue("open");
                    break;
                case Status.InProgress:
                    writer.WriteValue("in-progress");
                    break;
                case Status.Closed:
                    writer.WriteValue("closed");
                    break;
            }
        }
    }
}