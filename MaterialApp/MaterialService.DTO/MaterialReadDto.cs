namespace MaterialService.DTO
{
    public class MaterialReadDto
    {

        public string Id { get; set; }
        public string Name { get; set; }
        public bool IsVisible { get; set; }
        public string TypeOfPhase { get; set; }
        public int MinTemperature { get; set; }
        public int MaxTemperature { get; set; }
    }
}
