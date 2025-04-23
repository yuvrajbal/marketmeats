// components/CartOverlay.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../contexts/cartContext";

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  // Manage body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 shadow-lg flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex border-b">
          <h2 className="font-semibold tracking-widest uppercase flex-1 text-center">
            Your Cart ({itemCount})
          </h2>
          <X className="size-6 cursor-pointer" onClick={onClose} />
        </div>

        <div className="p-4 flex-grow overflow-y-auto">
          {/* Cart items */}
          {items.length > 0 ? (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col border-b pb-4">
                  <div className="flex gap-3">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm text-gray-500">
                        {item.weight && <span>{item.weight}</span>}
                        {item.tag && (
                          <span className="ml-2 text-orange-500">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="font-semibold mt-1">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="size-5" />
                    </button>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center mt-3 self-end">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-100 hover:bg-gray-200 p-1 rounded"
                    >
                      <Minus className="size-4" />
                    </button>
                    <span className="mx-3 font-medium w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-100 hover:bg-gray-200 p-1 rounded"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-center uppercase font-bold tracking-wide text-xl/6 text-orange-500">
              you don't have any items in your cart
            </p>
          )}
        </div>

        {/* Subtotal and Checkout Section */}
        <div className="mt-auto border-t">
          <div className="p-4 flex justify-between items-center font-semibold text-lg uppercase">
            <h2>Subtotal</h2>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="p-4 pt-0">
            <Link href={items.length > 0 ? "/checkout" : "#"}>
              <button
                className={`w-full py-3 uppercase tracking-wider font-bold text-white ${
                  items.length > 0
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={items.length === 0}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartOverlay;
