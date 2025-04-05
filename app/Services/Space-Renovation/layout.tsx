import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Space Renovation Services in UAE | Zaaviyan Contracting",
  description:
    "Zaaviyan Contracting transforms spaces with expert renovation services across the UAE. Whether residential or commercial, we modernize interiors with smart design and flawless execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
