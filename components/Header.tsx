"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBasket, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <nav className="flex flex-row justify-between font-semibold tracking-widest font-mono p-4">
        {openMenu ? (
          <X className="size-10" onClick={handleMenuClick} />
        ) : (
          <Menu className="size-10" onClick={handleMenuClick} />
        )}

        {/* <div className="flex gap-2 uppercase ">
        <NavLink text="shop" href="/shop" />
        <NavLink text="Search" href="/search" />

        <NavLink text="best sellers" href="/best-sellers" />
      </div> */}

        <Image src="/MM_Logo.png" alt="MM Logo" height={40} width={200} />
        {/* <div className="flex gap-2 uppercase">
        <NavLink text="about us" href="/about" />
        <NavLink text="tips and tricks" href="/tips-and-tricks" />
        <NavLink text="log in" href="/login" />
        <NavLink text="cart" href="/cart" />
      </div> */}
        <ShoppingBasket className="size-10" />
      </nav>
      {openMenu && <MobileMenu />}
    </>
  );
}

const MobileMenu = () => {
  return (
    <nav className="uppercase">
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
      <div className="flex flex-col text-center ">
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
          className="border-b border-gray-200 pb-4"
        />
      </div>
    </nav>
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
