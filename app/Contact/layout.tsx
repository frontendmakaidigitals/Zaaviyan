import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Zaaviyan Contracting | Fit Out & Contracting Services in UAE",
  description:
    "Contact Zaaviyan Contracting for expert fit-out, design, and contracting services across the UAE. We’re here to discuss your project needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
