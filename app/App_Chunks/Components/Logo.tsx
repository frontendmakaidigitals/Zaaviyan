import React from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
interface Props {
  src?: string;
  className?: string;
}
const Logo = ({ src, className }: Props) => {
  return (
    <Link href={"/"}>
      {src ? (
        <div className={cn(`w-40`, className)}>
          <img src={src} className="w-full h-full object-contain" />
        </div>
      ) : (
        <h3 className={cn(`text-4xl font-sans font-[600]`, className)}>Logo</h3>
      )}
    </Link>
  );
};

export default Logo;
