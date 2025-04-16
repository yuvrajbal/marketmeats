"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBasket, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

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
    if (openCart) setOpenCart(false);
  };

  const handleCartClick = () => {
    setOpenCart(!openCart);
    if (openMenu) setOpenMenu(false);
  };

  return (
    <>
      <nav className="flex flex-row justify-between font-semibold tracking-widest font-mono p-4">
        <div className="block sm:hidden">
          <Menu className="size-10" onClick={handleMenuClick} />
        </div>

        <div className=" gap-2 uppercase items-center hidden sm:flex">
          <NavLink text="shop" href="/shop" />
          <NavLink text="Search" href="/search" />
          <NavLink text="best sellers" href="/best-sellers" />
        </div>

        <div
          className={`${
            !openMenu ? "flex" : "hidden sm:flex"
          } justify-center flex-grow sm:flex-grow-0`}
        >
          <Image src="/MM_Logo.webp" alt="MMLogo" height={40} width={200} />
        </div>
        <div className="hidden sm:flex gap-2 uppercase items-center">
          <NavLink text="about us" href="/about" />
          <NavLink text="tips and tricks" href="/tips-and-tricks" />
          <NavLink text="log in" href="/login" />
          <div className="cursor-pointer" onClick={handleCartClick}>
            <ShoppingBasket className="size-8" />
          </div>
        </div>
      </nav>
      {/* {openMenu && <MobileMenu />} */}
      {/* Mobile sliding menu */}
      <MobileMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} />

      {/* Cart overlay */}
      <CartOverlay isOpen={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}

// const MobileMenu = () => {
//   return (
//     <nav className="uppercase">
//       <div className="flex flex-col text-center p-4 bg-gray-50 ">
//         <input
//           type="text"
//           className="font-extrabold text-2xl text-orange-600
//         placeholder:text-orange-600 placeholder:font-extrabold text-center
//         uppercase outline-none tracking-normal"
//           placeholder="How can we help?"
//         />
//         <div className="text-gray-500 font-semibold text-xs tracking-wide ">
//           Type to begin your search
//         </div>
//       </div>
//       <div className="flex flex-col text-center ">
//         <div className="flex flex-col gap-1 mb-3">
//           <NavLink text="shop" href="/shop" />
//           <div className="grid grid-cols-2 gap-2 ">
//             <ShopItem imageSrc={"/head-of-beef.svg"} title="Beef" />
//             <ShopItem imageSrc={"/head-of-pork.svg"} title="Pork" />
//             <ShopItem imageSrc={"/Market_Mobile.webp"} title="Market" />
//             <ShopItem imageSrc={"/head-of-chicken.svg"} title="Chicken" />
//           </div>
//         </div>

//         <NavLink
//           text="best sellers"
//           href="/best-sellers"
//           className="border-b border-gray-200 pb-4"
//         />
//         <NavLink
//           text="out story"
//           href="/our-story"
//           className="border-b border-gray-200 pb-4"
//         />
//         <NavLink
//           text="Our Process"
//           href="/our-process"
//           className="border-b border-gray-200 pb-4"
//         />
//         <NavLink
//           text="tips and tricks"
//           href="/tips-and-tricks"
//           className="border-b border-gray-200 pb-4"
//         />
//         <NavLink
//           text="log in"
//           href="/login"
//           className="border-b border-gray-200 pb-4"
//         />
//       </div>
//     </nav>
//   );
// };
interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}
const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-semibold tracking-widest uppercase">Your Cart</h2>
          <X className="size-6 cursor-pointer" onClick={onClose} />
        </div>
        <div className="p-4">
          {/* Cart items would go here */}
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      </div>
    </>
  );
};
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-end">
        <X className="size-10" onClick={onClose} />
      </div>
      <div className="flex flex-col items-center gap-6 mt-10 font-semibold tracking-widest uppercase">
        <NavLink text="shop" href="/shop" />
        <NavLink text="Search" href="/search" />
        <NavLink text="best sellers" href="/best-sellers" />
        <NavLink text="about us" href="/about" />
        <NavLink text="tips and tricks" href="/tips-and-tricks" />
        <NavLink text="log in" href="/login" />
      </div>
    </div>
  );
};

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
