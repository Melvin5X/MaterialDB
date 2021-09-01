using MaterialService.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MaterialService.Data
{
    public interface IDBProvider
    {
        Task<List<T>> GetEntities<T>() where T : IMaterial;
        Task CreateEntity<T>(T entity) where T : IMaterial;
    }
}
