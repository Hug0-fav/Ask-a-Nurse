import { SearchProvider } from "@/context/SearchContext";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ask A Nurse",
  description: "Health topics and more",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <SearchProvider>
          <Toaster position="top-right" />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
