using System;
using System.Collections.Generic;

#nullable disable

namespace MusicalInstrumentStore
{
    public partial class User
    {
        public User()
        {
            Orders = new HashSet<Order>();
        }

        public Guid Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string LastName { get; set; }
        public DateTime? DateOfBirthday { get; set; }
        public string Email { get; set; }
        public string Pass { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
