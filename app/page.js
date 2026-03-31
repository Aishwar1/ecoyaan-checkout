"use client";

import { useEffect, useState } from "react";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";

export default function Page() {

  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch("/api/cart", { cache: "no-store" })
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  if (!cart) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="md:col-span-2 space-y-4">
          {cart.cartItems.map((item) => (
            <CartItem key={item.product_id} item={item} />
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <OrderSummary cart={cart} />

          <Link href="/checkout">
            <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg">
              Proceed to Checkout
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}