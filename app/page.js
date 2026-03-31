import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";

async function getCart() {

  const res = await fetch("/api/cart", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const cart = await getCart();

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT - ITEMS */}
        <div className="md:col-span-2 space-y-4">
          {cart.cartItems.map((item) => (
            <CartItem key={item.product_id} item={item} />
          ))}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow-md border h-fit">
          <OrderSummary cart={cart} />

          <Link href="/checkout">
            <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Proceed to Checkout
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}