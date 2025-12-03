import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { ShoppingBag, Shirt, Package, ExternalLink, Mail } from "lucide-react";

const categories = [
  {
    name: "Event T-Shirts",
    description: "Official event merchandise from CSC and WKA sanctioned events",
    icon: Shirt,
    count: 12,
  },
  {
    name: "Hats",
    description: "WKA USA branded caps and beanies",
    icon: Package,
    count: 4,
  },
  {
    name: "Hoody Sweatshirts",
    description: "Premium hoodies with WKA USA branding",
    icon: Package,
    count: 6,
  },
  {
    name: "Officials Polo Shirts",
    description: "Official referee and judge polo shirts",
    icon: Shirt,
    count: 3,
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "CSC 43 Event T-Shirt",
    price: "$25.00",
    image: null,
  },
  {
    id: 2,
    name: "WKA USA Official Hat",
    price: "$20.00",
    image: null,
  },
  {
    id: 3,
    name: "WKA USA Hoodie - Black",
    price: "$45.00",
    image: null,
  },
  {
    id: 4,
    name: "Officials Polo - Red",
    price: "$35.00",
    image: null,
  },
];

export default function ShopPage() {
  return (
    <>
      <PageBanner
        title="WKA USA Online Store"
        subtitle="Official merchandise, event apparel, and equipment from the World Kickboxing Association USA."
      />

      {/* Store Status Banner */}
      <section className="bg-yellow-50 border-b border-yellow-200">
        <div className="container-custom py-6">
          <div className="text-center">
            <ShoppingBag className="h-12 w-12 mx-auto text-yellow-600 mb-3" />
            <h2 className="text-xl font-bold text-yellow-800 mb-2">
              Store Coming Soon
            </h2>
            <p className="text-yellow-700 max-w-xl mx-auto">
              Our online store is currently being updated. In the meantime, you can purchase
              merchandise at any WKA USA sanctioned event or contact us directly to place an order.
            </p>
            <a
              href="mailto:admin@wkausa.com"
              className="btn-primary mt-4 inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact to Order
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-center mb-8">Product Categories</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="card p-6 text-center hover:border-wka-red transition-colors">
                  <Icon className="h-10 w-10 mx-auto text-wka-red mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <span className="badge-gray">{category.count} items</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-center mb-8">Featured Products</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card overflow-hidden group">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Product Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-wka-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-wka-red font-bold mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Store Link */}
      <section className="section-padding bg-wka-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-4">Shop at Events</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Visit our merchandise booth at any WKA USA sanctioned event to browse and purchase
            official gear, event-specific apparel, and limited edition items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary">
              View Upcoming Events
            </Link>
            <a
              href="mailto:admin@wkausa.com?subject=Merchandise%20Order"
              className="btn-outline"
            >
              Email to Order
            </a>
          </div>
        </div>
      </section>

      {/* Ecwid Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-4">
              Powered by Ecwid
            </p>
            <div className="card p-8 border-dashed border-2">
              <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">
                Online store integration coming soon. Full e-commerce functionality
                with secure checkout will be available shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
