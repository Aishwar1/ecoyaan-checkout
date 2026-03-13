export default function CartItem({ item }) {

  return (
    <div className="flex gap-4 border p-4 rounded-lg">

      <img src={item.image} width={80} />

      <div>
        <h3 className="font-semibold">
          {item.product_name}
        </h3>

        <p>₹{item.product_price}</p>

        <p>Quantity: {item.quantity}</p>
      </div>

    </div>
  );
}
