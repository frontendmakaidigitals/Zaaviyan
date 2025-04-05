import type { Metadata } from "next";
import ReactLenis from "lenis/react";
import "./globals.css";
import Nav from "./Navbar/Nav";
import Footer from "./Footer/footer";
import Loading from "./App_Chunks/Components/Loader";
export const metadata: Metadata = {
  title: "Zaaviyan Contracting | Fit Out & Contracting Company in UAE",
  description: "Zaaviyan Contracting offers premium interior fit-out and contracting services across the UAE. From concept to completion, we deliver exceptional quality and craftsmanship."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` relative antialiased`}>
        <ReactLenis root options={{ duration: 0.7, lerp:1 }}>
        <Loading />
          <Nav />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
