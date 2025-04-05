import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home Maintenance Services in UAE | Zaaviyan Contracting",
  description:
    "Zaaviyan Contracting offers reliable home maintenance services across the UAE, including electrical, plumbing, painting, AC servicing, and more, ensuring your home stays in perfect shape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
