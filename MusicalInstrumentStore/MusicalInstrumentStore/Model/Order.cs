using System;
using System.Collections.Generic;

#nullable disable

namespace MusicalInstrumentStore
{
    public partial class Order
    {
        public Order()
        {
            ContactOrders = new HashSet<ContactOrder>();
        }

        public Guid Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public Guid ContactId { get; set; }

        public virtual User Contact { get; set; }
        public virtual ICollection<ContactOrder> ContactOrders { get; set; }
    }
}
