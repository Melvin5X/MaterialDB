using System.Collections.Generic;
using System.Threading.Tasks;
using MaterialService.Models;


namespace MaterialService.Data
{
    public interface IMaterialRepo
    {
        Task<IEnumerable<Material>> GetAllMaterials();
        Task CreateMaterial(Material material);

    }
}
