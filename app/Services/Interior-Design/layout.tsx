import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Interior Design Services in UAE | Zaaviyan Contracting",
  description:
    "Transform your space with Zaaviyan Contracting’s bespoke interior design services in the UAE. We blend creativity, functionality, and luxury to bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
