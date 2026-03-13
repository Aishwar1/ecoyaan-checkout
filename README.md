# Ecoyaan Checkout Flow (Frontend Assignment)

This project is a simplified **checkout flow** inspired by the Ecoyaan platform.
It demonstrates **Server-Side Rendering (SSR), state management, responsive UI, and a multi-step checkout process** using Next.js.

---

## Tech Stack

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* **Context API (State Management)**
* **Next.js API Routes (Mock Backend)**

---

## Features

* Server-Side Rendering for cart data
* Multi-step checkout flow
* Shipping address form with validation
* Order confirmation page
* Simulated payment process
* Responsive UI

---

## Checkout Flow

Cart / Order Summary
↓
Shipping Address Form
↓
Payment Confirmation
↓
Order Successful Page

---

## Mock Data

Cart data is fetched from a mock backend using **Next.js API Routes**.

Example:

```json
{
  "cartItems": [
    {
      "product_id": 101,
      "product_name": "Bamboo Toothbrush (Pack of 4)",
      "product_price": 299,
      "quantity": 2
    },
    {
      "product_id": 102,
      "product_name": "Reusable Cotton Produce Bags",
      "product_price": 450,
      "quantity": 1
    }
  ],
  "shipping_fee": 50,
  "discount_applied": 0
}
```

---

## Architecture

### Server-Side Rendering

Cart data is fetched during SSR using an API route.

```
data/mockData.json
        ↓
/api/cart
        ↓
SSR fetch in Cart Page
        ↓
Render UI
```

### State Management

The **CheckoutContext** stores the shipping address and makes it accessible across checkout steps.

```
Context API
   ↓
Checkout Page
   ↓
Payment Page
```

---

## Running Locally

Clone the repository:

```
git clone https://github.com/Aishwar/ecoyaan-checkout.git
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Deployment

The project is deployed using **Vercel**.

Live Demo:

```
https://ecoyaan-checkout-iota.vercel.app
```

---

## Author

**Aishwar Bhatnagar**

B.Tech, NIT Raipur
AI / ML & Software Engineering
