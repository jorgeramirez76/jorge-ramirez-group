"use client";
import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" aria-label="The Jorge Ramirez Group">
      <Image
        src="/images/logo/logo-primary.png"
        alt="The Jorge Ramirez Group"
        width={160}
        height={40}
        className="h-7 w-auto"
        priority
      />
    </Link>
  );
}
