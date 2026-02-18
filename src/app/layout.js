import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "Sushant Saurabh | Frontend Engineer",
  description:
    "Creative Frontend Engineer specializing in scalable React & Next.js applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="bg-[#0b0f19] text-gray-200 scroll-smooth overflow-x-hidden"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
