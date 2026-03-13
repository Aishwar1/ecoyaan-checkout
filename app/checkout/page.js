"use client";

import { useState, useContext } from "react";
import { CheckoutContext } from "@/context/CheckoutContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {

  const { setAddress } = useContext(CheckoutContext);

  const router = useRouter();

  const [form, setForm] = useState({});

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

    setAddress(form);

    router.push("/payment");
  }

  return (

    <div className="max-w-xl mx-auto p-8">

      <h1 className="text-xl font-bold mb-4">
        Shipping Address
      </h1>

      <form onSubmit={handleSubmit}
        className="space-y-4">

        <input
          placeholder="Full Name"
          required
          onChange={(e)=>setForm({...form,name:e.target.value})}
          className="w-full border p-2"
        />

        <input
          placeholder="Email"
          required
          onChange={(e)=>setForm({...form,email:e.target.value})}
          className="w-full border p-2"
        />

        <input
          placeholder="Phone"
          required
          onChange={(e)=>setForm({...form,phone:e.target.value})}
          className="w-full border p-2"
        />

        <input
          placeholder="PIN Code"
          required
          onChange={(e)=>setForm({...form,pin:e.target.value})}
          className="w-full border p-2"
        />

        <input
          placeholder="City"
          required
          onChange={(e)=>setForm({...form,city:e.target.value})}
          className="w-full border p-2"
        />

        <input
          placeholder="State"
          required
          onChange={(e)=>setForm({...form,state:e.target.value})}
          className="w-full border p-2"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Continue to Payment
        </button>

      </form>

    </div>
  );
}
