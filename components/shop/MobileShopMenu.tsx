// components/shop/MobileShopMenu.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Beef,
  Fish,
  Drumstick,
  Carrot,
  ShoppingBag,
  ChevronUp,
  X,
} from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function MobileShopMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      name: "All Products",
      href: "/shop",
      icon: <ShoppingBag className="size-5" />,
    },
    {
      name: "Beef",
      href: "/shop/beef",
      icon: <Beef className="size-5" />,
    },
    {
      name: "Chicken",
      href: "/shop/chicken",
      icon: <Drumstick className="size-5" />,
    },
    {
      name: "Fish",
      href: "/shop/fish",
      icon: <Fish className="size-5" />,
    },
    {
      name: "Lamb",
      href: "/shop/lamb",
      icon: <Carrot className="size-5" />, // Replace with lamb icon when available
    },
  ];

  // Get current category
  const getCurrentCategory = () => {
    if (pathname === "/shop") return "All Products";
    const category = menuItems.find((item) => pathname?.startsWith(item.href));
    return category ? category.name : "Shop";
  };

  // Lock body scroll when menu is open
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

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 flex justify-between items-center z-30"
        onClick={() => setIsOpen(true)}
      >
        <span className="font-bold uppercase tracking-wider text-orange-600">
          {getCurrentCategory()}
        </span>
        <ChevronUp className="size-5 text-orange-600" />
      </div>

      {/* Full screen overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Bottom sheet menu */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "85vh" }}
      >
        {/* Menu header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold uppercase tracking-wide ">
            Shop By Category
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="size-6" />
          </button>
        </div>

        {/* Menu items */}
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(85vh - 57px)" }}
        >
          <nav className="p-4 flex flex-col space-y-4">
            {menuItems.map((item) => {
              const isActive =
                (item.href === "/shop" && pathname === "/shop") ||
                (item.href !== "/shop" && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 p-4 rounded-md transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-600 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  {item.icon}
                  <span className="uppercase tracking-wider">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
