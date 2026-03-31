"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAddress } from "@/context/temp";

export default function CheckoutPage() {

  const { addresses, setAddresses } = useAddress();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pin: "",
    city: "",
    state: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      alert("Phone must be 10 digits");
      return;
    }

    // ✅ ADD ADDRESS (MULTIPLE SUPPORT)
    setAddresses([...addresses, form]);

    router.push("/payment");
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 pb-24">

      <h1 className="text-2xl font-bold mb-6">
        Shipping Address
      </h1>

      {/* EXISTING ADDRESSES */}
      {addresses.length > 0 && (
        <div className="mb-6 space-y-3">
          <h2 className="font-semibold">Saved Addresses</h2>

          {addresses.map((addr, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 bg-white shadow-sm"
            >
              <p className="font-medium">{addr.name}</p>
              <p className="text-sm text-gray-600">
                {addr.city}, {addr.state} - {addr.pin}
              </p>
              <p className="text-sm">{addr.phone}</p>
            </div>
          ))}
        </div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl border shadow-sm space-y-4"
      >

        <input
          placeholder="Full Name"
          required
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
          className="w-full border rounded-lg p-3"
        />

        <input
          placeholder="Email"
          required
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})}
          className="w-full border rounded-lg p-3"
        />

        <input
          placeholder="Phone"
          required
          value={form.phone}
          onChange={(e)=>setForm({...form,phone:e.target.value})}
          className="w-full border rounded-lg p-3"
        />

        <input
          placeholder="PIN Code"
          required
          value={form.pin}
          onChange={(e)=>setForm({...form,pin:e.target.value})}
          className="w-full border rounded-lg p-3"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="City"
            required
            value={form.city}
            onChange={(e)=>setForm({...form,city:e.target.value})}
            className="w-full border rounded-lg p-3"
          />

          <input
            placeholder="State"
            required
            value={form.state}
            onChange={(e)=>setForm({...form,state:e.target.value})}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90">
          Save & Continue
        </button>

      </form>

    </div>
  );
}