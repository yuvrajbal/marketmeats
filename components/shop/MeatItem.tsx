// components/MeatItem.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../contexts/cartContext";

interface MeatItemProps {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  tag?: string;
  weight?: string;
  inStock: boolean;
}

const MeatItem: React.FC<MeatItemProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  tag,
  weight,
  inStock,
}) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    if (!inStock) return;

    setIsAddingToCart(true);

    try {
      // Add item to cart
      addItem({
        id,
        name,
        price,
        imageUrl,
        weight,
        tag,
      });

      // Simulate a delay for visual feedback
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error("Failed to add item to cart", error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="flex flex-col border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container with aspect ratio */}
      <div className="relative w-full pb-[75%]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* Tag overlay */}
        {tag && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs uppercase font-bold py-1 px-2 rounded">
            {tag}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg uppercase tracking-wide mb-1">
          {name}
        </h3>

        {weight && <p className="text-sm text-gray-600 mb-2">{weight}</p>}

        {description && (
          <p className="text-sm text-gray-700 mb-4">{description}</p>
        )}

        <div className="mt-auto flex items-center justify-between">
          <span className="font-semibold text-lg">${price.toFixed(2)}</span>

          <button
            onClick={handleAddToCart}
            disabled={!inStock || isAddingToCart}
            className={`flex items-center justify-center px-3 py-2 rounded ${
              !inStock
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : isAddingToCart
                ? "bg-orange-400"
                : "bg-black hover:bg-orange-600"
            } text-white transition-colors`}
          >
            <ShoppingCart className="size-4 mr-1" />
            {!inStock
              ? "Sold Out"
              : isAddingToCart
              ? "Adding..."
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeatItem;
