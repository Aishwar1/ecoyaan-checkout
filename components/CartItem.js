export default function CartItem({ item }) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl border shadow-sm">

      <img
        src={item.image}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.product_name}</h3>

        <p className="text-gray-600 mt-1">₹{item.product_price}</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm">Qty:</span>
          <span className="px-2 py-1 border rounded">
            {item.quantity}
          </span>
        </div>
      </div>

    </div>
  );
}