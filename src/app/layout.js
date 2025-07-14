import { SearchProvider } from "@/context/SearchContext";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Jennie’s Blog",
  description: "Health topics and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SearchProvider>
            <Toaster position="top-right" />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
