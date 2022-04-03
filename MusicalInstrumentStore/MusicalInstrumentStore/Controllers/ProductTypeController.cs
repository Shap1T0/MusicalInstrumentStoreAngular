using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MusicalInstrumentStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypeController : Controller
    {
        private MusicalInstrumentStoreContext _context;
        public ProductTypeController(MusicalInstrumentStoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductType>>> Get()
        {
            return await _context.ProductTypes.ToListAsync();
        }
    }
}
