"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container h-40 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="The Jorge Ramirez Group"
        >
          <Image
            src="https://placehold.co/640x160.png?text=JRG&bg=000000&fg=FFFFFF"
            alt="The Jorge Ramirez Group"
            width={640}
            height={160}
            className="h-40 w-auto"
            priority
            unoptimized
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/buy">Buy</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/communities">Communities</Link>
          <Link href="/listings">Listings</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link
            href="/contact"
            className="rounded-full bg-black text-white px-4 py-2"
          >
            Consultation
          </Link>
        </nav>
        <button
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-2">
            {[
              "buy",
              "sell",
              "communities",
              "listings",
              "about",
              "resources",
              "contact",
            ].map((p) => (
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
