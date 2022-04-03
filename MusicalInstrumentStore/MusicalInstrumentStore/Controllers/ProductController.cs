using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MusicalInstrumentStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private MusicalInstrumentStoreContext _context;
        public ProductController(MusicalInstrumentStoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            return await _context.Products.Include(x => x.Type).ToListAsync();
        }

        [HttpGet("productType/{id}")]
        public async Task<ActionResult<IEnumerable<Product>>> Get(Guid id)
        {
            return await _context.Products.Where(x => x.TypeId == id).ToListAsync();
        }
    }
}
