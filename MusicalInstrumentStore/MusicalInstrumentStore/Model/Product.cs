using System;
using System.Collections.Generic;

#nullable disable

namespace MusicalInstrumentStore
{
    public partial class Product
    {
        public Product()
        {
            ContactOrders = new HashSet<ContactOrder>();
        }

        public Guid Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Name { get; set; }
        public Guid? BrandId { get; set; }
        public Guid TypeId { get; set; }
        public decimal Price { get; set; }
        public int Amount { get; set; }
        public string Description { get; set; }
        public byte[] Icon { get; set; }

        public virtual ProductType Type { get; set; }
        public virtual ICollection<ContactOrder> ContactOrders { get; set; }
    }
}
