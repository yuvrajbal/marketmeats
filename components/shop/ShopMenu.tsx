// components/shop/ShopMenu.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Beef, Fish, Drumstick, Carrot, ShoppingBag } from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function ShopMenu() {
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

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h2 className="text-xl font-bold uppercase tracking-wide mb-6 ">
        Shop By Category
      </h2>

      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => {
          const isActive =
            (item.href === "/shop" && pathname === "/shop") ||
            (item.href !== "/shop" && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-2 p-3 rounded-md transition-colors ${
                isActive
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="uppercase tracking-wider text-sm">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
