import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Custom Joinery Services in UAE | Zaaviyan Contracting",
  description:
    "Zaaviyan Contracting provides high-quality custom joinery solutions for residential, commercial, and hospitality projects across the UAE. Precision-crafted woodwork, tailored to perfection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
