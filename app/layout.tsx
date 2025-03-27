import type { Metadata } from "next";
import ReactLenis from "lenis/react";
import "./globals.css";
import Nav from "./Navbar/Nav";
import Footer from "./Footer/footer";
import Loading from "./App_Chunks/Components/Loader";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
