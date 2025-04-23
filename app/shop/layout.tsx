// app/shop/layout.tsx
import { ReactNode } from "react";
import ShopMenu from "../../components/shop/ShopMenu";
import MobileShopMenu from "../../components/shop/MobileShopMenu";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 container mx-auto px-4 py-8">
        {/* Left Side Menu - 25% width on desktop */}
        <div className="col-span-1">
          <ShopMenu />
        </div>

        {/* Main Content Area - 75% width on desktop */}
        <main className="col-span-3">{children}</main>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen pb-16">
        {/* Full Width Content */}
        <main className="container mx-auto px-4 py-6">{children}</main>

        {/* Mobile Bottom Menu Trigger */}
        <MobileShopMenu />
      </div>
    </div>
  );
}
