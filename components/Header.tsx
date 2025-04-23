"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBasket, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCart } from "@/contexts/cartContext";
import CartOverlay from "./CartOverlay";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    isOpen: openCart,
    openCart: handleOpenCart,
    closeCart: handleCloseCart,
    itemCount,
  } = useCart();

  // Close menus when clicking outside
  useEffect(() => {
    if (openMenu || openCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMenu, openCart]);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
    if (openCart) handleCloseCart();
  };

  const handleCartClick = () => {
    if (openCart) {
      handleCloseCart();
    } else {
      handleOpenCart();
    }

    if (openMenu) setOpenMenu(false);
  };

  return (
    <>
      <nav className="flex flex-row justify-between font-semibold tracking-widest font-mono p-4">
        <div className="block sm:hidden">
          {openMenu ? (
            <X className="size-10" onClick={handleMenuClick} />
          ) : (
            <Menu className="size-10" onClick={handleMenuClick} />
          )}
        </div>

        <div className="gap-2 uppercase items-center hidden sm:flex">
          <NavLink text="shop" href="/shop" />
          <NavLink text="Search" href="/search" />
          <NavLink text="best sellers" href="/best-sellers" />
        </div>

        <Image src="/MM_Logo.webp" alt="MMLogo" height={40} width={200} />

        <div className="hidden sm:flex gap-2 uppercase items-center">
          <NavLink text="about us" href="/about" />
          <NavLink text="tips and tricks" href="/tips-and-tricks" />
          <NavLink text="log in" href="/login" />
          <div className="cursor-pointer relative" onClick={handleCartClick}>
            <ShoppingBasket className="size-8" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
        </div>

        <button onClick={handleCartClick} className="sm:hidden relative">
          <ShoppingBasket className="size-8" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </nav>

      <MobileMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} />

      {/* Cart overlay */}
      <CartOverlay isOpen={openCart} onClose={handleCloseCart} />
    </>
  );
}
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <nav
      className={`uppercase fixed  left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 overflow-y-auto sm:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col text-center p-4 bg-gray-50 ">
        <input
          type="text"
          className="font-extrabold text-2xl text-orange-600
        placeholder:text-orange-600 placeholder:font-extrabold text-center
        uppercase outline-none tracking-normal"
          placeholder="How can we help?"
        />
        <div className="text-gray-500 font-semibold text-xs tracking-wide ">
          Type to begin your search
        </div>
      </div>
      <div className="flex flex-col text-center mb-12 ">
        <div className="flex flex-col gap-1 mb-3">
          <NavLink text="shop" href="/shop" />
          <div className="grid grid-cols-2 gap-2 ">
            <ShopItem imageSrc={"/head-of-beef.svg"} title="Beef" />
            <ShopItem imageSrc={"/head-of-pork.svg"} title="Pork" />
            <ShopItem imageSrc={"/Market_Mobile.webp"} title="Market" />
            <ShopItem imageSrc={"/head-of-chicken.svg"} title="Chicken" />
          </div>
        </div>

        <NavLink
          text="best sellers"
          href="/best-sellers"
          className="border-b border-gray-200 pb-4"
        />
        <NavLink
          text="out story"
          href="/our-story"
          className="border-b border-gray-200 pb-4"
        />
        <NavLink
          text="Our Process"
          href="/our-process"
          className="border-b border-gray-200 pb-4"
        />
        <NavLink
          text="tips and tricks"
          href="/tips-and-tricks"
          className="border-b border-gray-200 pb-4"
        />
        <NavLink
          text="log in"
          href="/login"
          className="border-b border-gray-200 pb-4 mb-16"
        />
      </div>
    </nav>
  );
};
// interface CartOverlayProps {
//   isOpen: boolean;
//   onClose: () => void;
// }
// const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
//   const [itemcount, setItemCount] = useState(0);
//   // Example subtotal calculation
//   const subtotal = 30.0; // In a real app, this would be calculated from your cart items

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 uppercase ${
//           isOpen ? "opacity-30" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={onClose}
//       />

//       {/* Cart Panel */}
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 shadow-lg flex flex-col ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-4 flex border-b">
//           <h2 className="font-semibold tracking-widest uppercase flex-1 text-center">
//             Your Cart ({itemcount})
//           </h2>
//           <X className="size-6 cursor-pointer" onClick={onClose} />
//         </div>

//         <div className="p-4 flex-grow overflow-y-auto">
//           {/* Cart items would go here */}
//           {itemcount > 0 ? (
//             <div className="flex flex-col gap-4">
//               {/* Cart items would be mapped here */}
//               <div className="flex justify-between items-center">
//                 <span>Item 1</span>
//                 <span>$10.00</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span>Item 2</span>
//                 <span>$20.00</span>
//               </div>
//             </div>
//           ) : (
//             <p className="mt-4 text-center uppercase font-bold tracking-wide text-xl/6 text-orange-500">
//               you don't have any items in your cart
//             </p>
//           )}
//         </div>

//         {/* Subtotal and Checkout Section - Fixed at bottom */}
//         <div className="mt-auto border-t">
//           <div className="p-4 flex justify-between items-center font-semibold text-lg uppercase">
//             <h2>Subtotal</h2>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <div className="p-4 pt-0">
//             <button
//               className={`w-full py-3 uppercase tracking-wider font-bold text-white ${
//                 itemcount > 0
//                   ? "bg-orange-500 hover:bg-orange-600"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//               disabled={itemcount === 0}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ShopItemProps {
  imageSrc: string;
  title: string;
}
function ShopItem({ imageSrc, title }: ShopItemProps) {
  return (
    <div className="flex flex-col items-center justify-between bg-orange-50 text-orange-600 font-bold text-xl p-4">
      <Image src={imageSrc} alt={title} height={80} width={80} />
      {title}
    </div>
  );
}

interface LinkProps {
  text: string;
  href: string;
  className?: string;
}

function NavLink({ text, href, className }: LinkProps) {
  return (
    <Link
      href={href}
      className={`hover:text-gray-600 text-xs transition-colors p-4 font-bold tracking-wider ${className} `}
    >
      {text}
    </Link>
  );
}
