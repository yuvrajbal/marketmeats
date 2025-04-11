import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between font-semibold py-4">
      <div className="flex gap-2 uppercase ">
        <NavLink text="shop" href="/shop" />
        <NavLink text="Search" href="/search" />

        <NavLink text="best sellers" href="/best-sellers" />
      </div>

      <Image src="/MM_Logo.png" alt="MM Logo" height={80} width={280} />
      <div className="flex gap-2 uppercase">
        <NavLink text="about us" href="/about" />
        <NavLink text="tips and tricks" href="/tips-and-tricks" />
        <NavLink text="log in" href="/login" />
        <NavLink text="cart" href="/cart" />
      </div>
    </nav>
  );
}

interface LinkProps {
  text: string;
  href: string;
}

function NavLink({ text, href }: LinkProps) {
  return (
    <Link href={href} className="hover:text-gray-600 transition-colors p-4">
      {text}
    </Link>
  );
}
