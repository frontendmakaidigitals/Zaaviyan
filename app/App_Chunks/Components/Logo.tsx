import React from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
interface Props {
  src?: string;
  className?: string;
}
const Logo = ({ src = '/Logo.png', className }: Props) => {
  return (
    <Link href={"/"}>
      {src ? (
        <div className={cn(`w-24`, className)}>
          <img src={src} className="w-full h-full object-contain" />
        </div>
      ) : (
        <h3 className={cn(`text-4xl font-sans font-[600]`)}>Logo</h3>
      )}
    </Link>
  );
};

export default Logo;
