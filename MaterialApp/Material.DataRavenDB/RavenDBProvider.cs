using MaterialService.Models;
using Raven.Client.Documents;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MaterialService.Data
{
    public class RavenDBProvider : IDBProvider
    {
        public RavenDBProvider(IDocumentStore documentStore)
        {
            DocumentStore = documentStore;
        }

        protected IDocumentStore DocumentStore { get; set; }

        public async Task CreateEntity<T>(T entity) where T : IMaterial
        {
            using (var session = DocumentStore.OpenAsyncSession())
            {
                await session.StoreAsync(entity);
                await session.SaveChangesAsync();
            }
        }

        public async Task<List<T>> GetEntities<T>() where T : IMaterial
        {
            using (var session = DocumentStore.OpenAsyncSession())
            {
                var entities = await session.Query<T>().OrderBy(x => x.Name).ToListAsync();
                return entities;
            }
        }
    }
}
