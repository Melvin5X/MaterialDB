using AutoMapper;
using MaterialService.Data;
using MaterialService.DTO;
using MaterialService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MaterialService.API.Controllers
{
    [Route("materials")]
    [ApiController]
    public class MaterialsController : ControllerBase
    {
        private readonly IMaterialRepo _repository;
        private readonly IMapper _mapper;

        public MaterialsController(IMaterialRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MaterialReadDto>>> GetMaterials()
        {
            var materials = await _repository.GetAllMaterials();
            return Ok(_mapper.Map<IEnumerable<MaterialReadDto>>(materials));
        }

        [HttpPost]
        public async Task<ActionResult> CreateMaterial(MaterialCreateDto materialDto)
        {
            if (ModelState.IsValid)
            {
                var material = _mapper.Map<Material>(materialDto);
                await _repository.CreateMaterial(material);
                return Ok();
            }
            return BadRequest();
        }
    }
}