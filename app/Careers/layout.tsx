import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Careers at Zaaviyan Contracting | Join Our Team in UAE",
  description:
    "Explore exciting career opportunities at Zaaviyan Contracting. We’re looking for talented professionals in construction, design, and project management to join our growing team in the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
