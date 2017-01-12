using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SprintsManager.Data.Models.Entities;
using System;

namespace SprintsManager.Data.Converters
{
    public class StatusConverter : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return true;
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var token = JToken.Load(reader);
            var subReader = token.CreateReader();
            subReader.Read();
            var status = subReader.Value.ToString();
            switch (status)
            {
                case "open":
                    return Status.Open;
                case "in-progress":
                    return Status.InProgress;
                case "closed":
                    return Status.Closed;
            }
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