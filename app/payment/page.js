"use client";

import { useContext } from "react";
import { CheckoutContext } from "@/context/CheckoutContext";
import { useRouter } from "next/navigation";

export default function PaymentPage(){

  const { address } = useContext(CheckoutContext);

  const router = useRouter();

  return (

    <div className="max-w-xl mx-auto p-8">

      <h1 className="text-xl font-bold mb-4">
        Confirm Order
      </h1>

      <div className="border p-4 mb-4">

        <h2 className="font-semibold">
          Shipping Address
        </h2>

        <p>{address.name}</p>
        <p>{address.city}, {address.state}</p>
        <p>{address.pin}</p>
        <p>{address.phone}</p>

      </div>

      <button
        onClick={()=>router.push("/success")}
        className="bg-green-600 text-white px-6 py-3 rounded">

        Pay Securely

      </button>

    </div>
  );
}
