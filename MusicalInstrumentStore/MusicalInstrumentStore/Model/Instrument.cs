using System;
using System.Collections.Generic;

#nullable disable

namespace MusicalInstrumentStore
{
    public partial class Instrument
    {
        public Instrument()
        {
            ContactOrders = new HashSet<ContactOrder>();
        }

        public Guid Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Name { get; set; }
        public Guid? Brand { get; set; }
        public Guid? Type { get; set; }
        public decimal? Price { get; set; }
        public int? Amount { get; set; }

        public virtual ICollection<ContactOrder> ContactOrders { get; set; }
    }
}
