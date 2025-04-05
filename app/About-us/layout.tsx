import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Zaaviyan Contracting – Interior Fit Out & Contracting Company in UAE",
  description:
    "Zaaviyan Contracting is a UAE-based fit out and contracting company committed to excellence, precision, and innovation. Learn more about our mission, vision, and the team behind our success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
