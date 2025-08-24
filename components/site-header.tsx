"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center"
          aria-label="The Jorge Ramirez Group"
        >
          <Image
            src="/images/logo/logo-primary.png"
            alt="The Jorge Ramirez Group"
            width={200}
            height={50}
            priority
            className="h-8 w-auto transition-transform duration-150 group-hover:scale-110"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/buy">Buy</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/communities">Communities</Link>
          <Link href="/listings">Listings</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact" className="rounded-full bg-black text-white px-4 py-2">Consultation</Link>
        </nav>
        <button
          className="md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-2">
            {["buy", "sell", "communities", "listings", "about", "resources", "contact"].map((p) => (
              <Link
                key={p}
                href={`/${p}`}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {p[0].toUpperCase() + p.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

