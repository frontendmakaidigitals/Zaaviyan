import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Professional Carpentry Services in UAE | Zaaviyan Contracting",
  description:
    "Zaaviyan Contracting offers expert carpentry services across the UAE, including custom furniture, doors, partitions, and detailed woodwork tailored to your project needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
