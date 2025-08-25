import ContactForm from "@/components/forms/ContactForm";

export const revalidate = 86400;

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[900px] p-8">
      <h1>Contact The Jorge Ramirez Group</h1>
      <p>
        Call <a href="tel:+19082307844">908-230-7844</a> or send us a message
        below.
      </p>
      <ContactForm />
      <address>
        Keller Williams Premier Properties
        <br />
        488 Springfield Ave, Summit, NJ 07901
      </address>
    </main>
  );
}
