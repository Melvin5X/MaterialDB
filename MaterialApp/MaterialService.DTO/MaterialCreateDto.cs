using System;
using System.ComponentModel.DataAnnotations;

namespace MaterialService.DTO
{
    public class MaterialCreateDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public bool IsVisible { get; set; }

        [Required]
        public string TypeOfPhase { get; set; }

        [Required]
        public int MinTemperature { get; set; }

        [Required]
        public int MaxTemperature { get; set; }

        public DateTime CreatedOn { get; set; }
    }
}
