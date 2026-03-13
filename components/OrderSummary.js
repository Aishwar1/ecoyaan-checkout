export default function OrderSummary({ cart }) {

  const subtotal = cart.cartItems.reduce(
    (acc, item) =>
      acc + item.product_price * item.quantity,
    0
  );

  const total = subtotal + cart.shipping_fee;

  return (
    <div className="border p-4 rounded-lg">

      <p>Subtotal: ₹{subtotal}</p>

      <p>Shipping: ₹{cart.shipping_fee}</p>

      <hr className="my-2"/>

      <p className="font-bold">
        Total: ₹{total}
      </p>

    </div>
  );
}
