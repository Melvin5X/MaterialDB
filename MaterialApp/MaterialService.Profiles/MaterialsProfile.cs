using AutoMapper;
using MaterialService.DTO;
using MaterialService.Models;

namespace MaterialService.Profiles
{
    public class MaterialsProfile : Profile
    {
        public MaterialsProfile()
        {
            CreateMap<Material, MaterialReadDto>();
            CreateMap<MaterialCreateDto, Material>();
        }
    }
}
