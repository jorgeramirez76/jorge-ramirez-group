"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur text-white">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="The Jorge Ramirez Group">
          <Image
            src="/images/logo/logo-alt.jpg"
            alt="The Jorge Ramirez Group"
            width={160}
            height={40}
            className="h-7 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/buy">Buy</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/communities">Communities</Link>
          <Link href="/listings">Listings</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/commuting">Commuting</Link>
          <Link href="/contact" className="rounded-full bg-brand-red text-white px-4 py-2">Consultation</Link>
        </nav>
        <button className="md:hidden text-white" aria-label="Menu" onClick={()=>setOpen(v=>!v)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="container py-3 flex flex-col gap-2">
            {["buy","sell","communities","listings","about","resources","commuting","contact"].map(p=> (
              <Link key={p} href={`/${p}`} onClick={()=>setOpen(false)} className="py-2 text-white">{p[0].toUpperCase()+p.slice(1)}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}