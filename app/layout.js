import "./globals.css";
import { CheckoutProvider } from "@/context/CheckoutContext";

export const metadata = {
  title: "Ecoyaan Checkout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CheckoutProvider>
          {children}
        </CheckoutProvider>
      </body>
    </html>
  );
}
