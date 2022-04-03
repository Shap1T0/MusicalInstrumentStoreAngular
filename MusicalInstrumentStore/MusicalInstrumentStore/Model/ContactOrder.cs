using System;
using System.Collections.Generic;

#nullable disable

namespace MusicalInstrumentStore
{
    public partial class ContactOrder
    {
        public Guid Id { get; set; }
        public DateTime? CreatedOn { get; set; }
        public Guid? OrderId { get; set; }
        public Guid? ProductId { get; set; }

        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
}
