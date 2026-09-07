import { Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://forgeburgers.com"),
  title: "FORGE. | Smashed to Perfection - Premium Burgers",
  description:
    "Experience the ultimate smashed burgers at FORGE. Juicy, crispy, and loaded with flavor, crafted with premium ingredients in Nowgam.",
  keywords: "smashed burgers, gourmet burgers, Nowgam restaurant, Forge burgers, fast food delivery",
  openGraph: {
    title: "FORGE. | Smashed to Perfection",
    description: "Premium dark cinematic smashed burgers. Fresh, hot, and packed with bold flavors.",
    images: ["/images/hero-burger.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#090909] text-[#F5EFE5] font-sans antialiased selection:bg-[#E33B20] selection:text-white">
        {children}
      </body>
    </html>
  );
}
