import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const fontOutfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "BookFlow",
  description: "Online Book Borrowing Platform ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${fontOutfit.className} h-full antialiased`}
    >
      <body>

        <Navbar />

        <main className="w-11/12 mx-auto">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
