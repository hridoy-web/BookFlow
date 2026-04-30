import { Outfit } from "next/font/google";
import "./globals.css";

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
       
       {children}

      </body>
    </html>
  );
}
