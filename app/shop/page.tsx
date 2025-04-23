// app/shop/page.tsx
import { Suspense } from "react";
// import MeatItem from "../../components/shop/MeatItem";
import MeatItem from "../../components/shop/MeatItem";

// This would come from your database or API in a real app
const getMeatProducts = async () => {
  // Simulating API fetch delay

  return [
    {
      id: "1",
      name: "Ribeye Steak",
      description: "Premium cut with exceptional marbling",
      price: 24.99,
      imageUrl: "/beef.png",
      tag: "Dry Aged",
      weight: "12 oz",
      inStock: true,
    },
    {
      id: "2",
      name: "Ground Beef",
      description: "85% lean, perfect for burgers",
      price: 8.99,
      imageUrl: "/NYStrip_new_550x550.webp",
      weight: "1 lb",
      inStock: true,
    },
    {
      id: "3",
      name: "Filet Mignon",
      description: "The most tender beef cut",
      price: 29.99,
      imageUrl: "/NYStrip_new_550x550.webp",
      tag: "Grass-Fed",
      weight: "8 oz",
      inStock: false,
    },
    {
      id: "4",
      name: "Chicken Breast",
      description: "Boneless, skinless chicken breast",
      price: 12.99,
      imageUrl: "/NYStrip_new_550x550.webp",
      tag: "Organic",
      weight: "1 lb",
      inStock: true,
    },
    {
      id: "5",
      name: "Salmon Fillet",
      description: "Wild-caught Atlantic salmon",
      price: 18.99,
      imageUrl: "/NYStrip_new_550x550.webp",
      tag: "Wild Caught",
      weight: "8 oz",
      inStock: true,
    },
    {
      id: "6",
      name: "Lamb Chops",
      description: "Tender and flavorful lamb chops",
      price: 22.99,
      imageUrl: "/NYStrip_new_550x550.webp",
      weight: "1 lb",
      inStock: true,
    },
  ];
};

export default async function ShopPage() {
  const products = await getMeatProducts();

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
        All Products
      </h1>

      <Suspense fallback={<ProductsLoading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <MeatItem
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              tag={product.tag}
              weight={product.weight}
              inStock={product.inStock}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="border rounded-md overflow-hidden shadow-sm">
          <div className="w-full h-48 bg-gray-200 animate-pulse" />
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
            <div className="flex justify-between items-center mt-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-1/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
