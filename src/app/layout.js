import "./globals.css";
import { Poppins, Space_Grotesk } from "next/font/google";

import { SearchProvider } from "@/context/SearchContext";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"], // medium + semibold
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ask A Nurse",
  description: "Health topics and more",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
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
