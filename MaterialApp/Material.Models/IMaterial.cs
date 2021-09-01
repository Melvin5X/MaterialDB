namespace MaterialService.Models
{
    public interface IMaterial
    {
        public string Name { get; set; }

        public bool IsVisible { get; set; }

        public string TypeOfPhase { get; set; }
  
        public int MinTemperature { get; set; }
        
        public int MaxTemperature { get; set; }
    }
}
