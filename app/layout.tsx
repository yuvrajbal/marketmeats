// app/layout.tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import { CartProvider } from "../contexts/cartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meat Market",
  description: "Premium meats delivered to your door",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
