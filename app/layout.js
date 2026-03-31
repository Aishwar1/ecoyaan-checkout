import "./globals.css";
import { AddressProvider } from "@/context/temp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <AddressProvider>
          <div className="min-h-screen flex flex-col">

            <main className="flex-1 pb-24">
              {children}
            </main>

            {/* STICKY FOOTER */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex justify-between z-50">
              <button className="px-4 py-2 border rounded-lg">
                Back
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-lg">
                Next Step
              </button>
            </div>

          </div>
        </AddressProvider>

      </body>
    </html>
  );
}