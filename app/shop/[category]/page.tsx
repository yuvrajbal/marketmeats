// app/shop/[category]/page.tsx
import { Suspense } from "react";
import { notFound } from "next/navigation";
import MeatItem from "../../../components/shop/MeatItem";

// Define your valid categories
const validCategories = ["beef", "chicken", "fish", "lamb"];

// This would come from your database or API in a real app
const getMeatProductsByCategory = async (category: string) => {
  // Validate category
  if (!validCategories.includes(category)) {
    return null;
  }

  // Simulating API fetch delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mock data - in a real app, you'd filter from your database
  const allProducts = [
    {
      id: "1",
      name: "Ribeye Steak",
      description: "Premium cut with exceptional marbling",
      price: 24.99,
      imageUrl: "/images/products/ribeye.jpg",
      tag: "Dry Aged",
      weight: "12 oz",
      inStock: true,
      category: "beef",
    },
    {
      id: "2",
      name: "Ground Beef",
      description: "85% lean, perfect for burgers",
      price: 8.99,
      imageUrl: "/images/products/ground-beef.jpg",
      weight: "1 lb",
      inStock: true,
      category: "beef",
    },
    {
      id: "3",
      name: "Filet Mignon",
      description: "The most tender beef cut",
      price: 29.99,
      imageUrl: "/images/products/filet.jpg",
      tag: "Grass-Fed",
      weight: "8 oz",
      inStock: false,
      category: "beef",
    },
    {
      id: "4",
      name: "Chicken Breast",
      description: "Boneless, skinless chicken breast",
      price: 12.99,
      imageUrl: "/images/products/chicken-breast.jpg",
      tag: "Organic",
      weight: "1 lb",
      inStock: true,
      category: "chicken",
    },
    {
      id: "5",
      name: "Salmon Fillet",
      description: "Wild-caught Atlantic salmon",
      price: 18.99,
      imageUrl: "/images/products/salmon.jpg",
      tag: "Wild Caught",
      weight: "8 oz",
      inStock: true,
      category: "fish",
    },
    {
      id: "6",
      name: "Lamb Chops",
      description: "Tender and flavorful lamb chops",
      price: 22.99,
      imageUrl: "/images/products/lamb-chops.jpg",
      weight: "1 lb",
      inStock: true,
      category: "lamb",
    },
  ];

  return allProducts.filter((product) => product.category === category);
};

// Generate category title
const getCategoryTitle = (category: string) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const products = await getMeatProductsByCategory(category);

  // If category doesn't exist, show 404
  if (!products) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
        {getCategoryTitle(category)}
      </h1>

      <Suspense fallback={<ProductsLoading />}>
        {products.length > 0 ? (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No products available in this category.
            </p>
          </div>
        )}
      </Suspense>
    </div>
  );
}

function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((item) => (
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
