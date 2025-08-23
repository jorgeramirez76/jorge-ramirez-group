import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ListingGrid } from "@/components/listing-grid";
import { Testimonials } from "@/components/testimonials";
import { siteConfig } from "@/lib/site";
import { JsonLdOrganization } from "@/components/seo/jsonld-organization";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <JsonLdOrganization />
      <section className="relative bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <Image src="/images/hero.webp" alt="Luxury NJ real estate" fill priority className="object-cover opacity-70" />
        </div>
        <div className="container relative py-28 lg:py-40">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="font-serif text-4xl md:text-6xl max-w-3xl">
            Sell for More. Buy with Confidence.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-200">
            The Jorge Ramirez Group delivers concierge-level service and market intelligence across Central & Northern New Jersey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/sell"><Button size="lg" variant="primary">Get Your Home Value</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline">Book a Private Consultation</Button></Link>
          </div>
        </div>
      </section>

      <Section title="Featured Listings" eyebrow="Explore">
        <ListingGrid limit={6} />
        <div className="mt-8 text-center">
          <Link href="/listings"><Button variant="ghost">View All Listings</Button></Link>
        </div>
      </Section>

      <Section title="Why Sellers Choose Us" eyebrow="Strategy">
        <div className="grid md:grid-cols-3 gap-6">
          {["Luxury Marketing", "Private Database", "Data‑Driven Pricing"].map((t, i) => (
            <div key={i} className="rounded-2xl border p-6 shadow-soft">
              <h3 className="font-serif text-2xl">{t}</h3>
              <p className="mt-3 text-neutral-700">White‑glove prep, cinematic video & 3D tours, plus targeted exposure to qualified buyers.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Praise from Clients" eyebrow="Trust">
        <Testimonials />
      </Section>

      <Section title="In the Press" eyebrow="Proof">
        <div className="flex items-center gap-8 opacity-70 flex-wrap">
          {["Forbes","WSJ","Bloomberg","CNBC"].map((logo) => (
            <span key={logo} className="text-xl">{logo}</span>
          ))}
        </div>
      </Section>

      <Section title="Ready to move?" eyebrow="Next step">
        <div className="rounded-2xl bg-black text-white p-10 text-center">
          <p className="text-lg">500+ Homes Sold • 15+ Years • 4.9★</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact"><Button variant="secondary">Talk to Jorge</Button></Link>
            <a href={`tel:${siteConfig.phoneRaw}`}><Button variant="outlineLight">Call {siteConfig.phoneDisplay}</Button></a>
          </div>
        </div>
      </Section>
    </>
  );
}