import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Custom Furniture Crafting in UAE | Zaaviyan Contracting",
  description:
    "Zaaviyan Contracting specializes in custom-made furniture solutions in the UAE. From concept to creation, we deliver handcrafted pieces that blend design, comfort, and quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
