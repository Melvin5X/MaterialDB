using MaterialService.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MaterialService.Data
{
    public class MaterialRepo : IMaterialRepo
    {
        protected IDBProvider DatabaseProvider { get; set; }
        public MaterialRepo(IDBProvider DBProvider)
        {
            DatabaseProvider = DBProvider;
        }

        public async Task<IEnumerable<Material>> GetAllMaterials()
        {
            var materials = await DatabaseProvider.GetEntities<Material>();
            return materials;
        }

        public async Task CreateMaterial(Material material)
        {
            if(material == null)
            {
                throw new ArgumentNullException();
            }
            await DatabaseProvider.CreateEntity<Material>(material);
        }
    }
}
