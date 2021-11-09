using Microsoft.AspNetCore.Http;
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
    public class UserController : ControllerBase
    {
        MusicalInstrumentStoreContext db;
        public UserController(MusicalInstrumentStoreContext context)
        {
            db = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Get()
        {
            return await db.User.ToListAsync();
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(Guid id)
        {
            User user = await db.User.FirstOrDefaultAsync(x => x.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            return new ObjectResult(user);
        }

        // POST api/users
        [HttpPost]
        public async Task<ActionResult<User>> Post(User contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }

            db.User.Add(contact);
            await db.SaveChangesAsync();
            return Ok(contact);
        }

        // PUT api/users/
        [HttpPut]
        public async Task<ActionResult<User>> Put(User contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }
            if (!db.User.Any(x => x.Id == contact.Id))
            {
                return NotFound();
            }

            db.Update(contact);
            await db.SaveChangesAsync();
            return Ok(contact);
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> Delete(Guid id)
        {
            User contact = db.User.FirstOrDefault(x => x.Id == id);
            if (contact == null)
            {
                return NotFound();
            }
            db.User.Remove(contact);
            await db.SaveChangesAsync();
            return Ok(contact);
        }
    }
}
