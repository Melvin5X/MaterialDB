using System;

namespace MaterialService.Models
{
    public class Material : IMaterial
    {
        
        public string Id { get; set; }

        public string Name { get; set; }

        public bool IsVisible { get; set; }

        public string TypeOfPhase { get; set; }

        public int MinTemperature { get; set; }

        public int MaxTemperature { get; set; }
        public DateTime CreatedOn { get; set; }

    }
}
