using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MusicalInstrumentStore.Controllers
{
    public class OrderController : Controller
    {
        MusicalInstrumentStoreContext db;
        public OrderController(MusicalInstrumentStoreContext context)
        {
            db = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Get()
        {
            return await db.Order.ToListAsync();
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> Get(Guid id)
        {
            Order order = await db.Order.FirstOrDefaultAsync(x => x.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            return new ObjectResult(order);
        }

        // POST api/users
        [HttpPost]
        public async Task<ActionResult<User>> Post(Order order)
        {
            if (order == null)
            {
                return BadRequest();
            }

            db.Order.Add(order);
            await db.SaveChangesAsync();
            return Ok(order);
        }

        // PUT api/users/
        [HttpPut]
        public async Task<ActionResult<User>> Put(Order order)
        {
            if (order == null)
            {
                return BadRequest();
            }
            if (!db.Order.Any(x => x.Id == order.Id))
            {
                return NotFound();
            }

            db.Update(order);
            await db.SaveChangesAsync();
            return Ok(order);
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> Delete(Guid id)
        {
            Order order = db.Order.FirstOrDefault(x => x.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            db.Order.Remove(order);
            await db.SaveChangesAsync();
            return Ok(order);
        }
    }
}
