import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";

async function getCart() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Page() {

  const cart = await getCart();

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-2xl font-bold mb-6">
        Cart
      </h1>

      <div className="space-y-4">
        {cart.cartItems.map((item) => (
          <CartItem key={item.product_id} item={item}/>
        ))}
      </div>

      <div className="mt-6">
        <OrderSummary cart={cart}/>
      </div>

      <Link href="/checkout">

        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded">
          Proceed to Checkout
        </button>

      </Link>

    </div>
  );
}
