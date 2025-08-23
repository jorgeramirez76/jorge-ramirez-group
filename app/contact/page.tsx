import ContactForm from '@/components/forms/ContactForm';

export const revalidate = 86400;

export default function ContactPage() {
  return (
    <main className="max-w-[900px] mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact The Jorge Ramirez Group</h1>
      <p>
        Call <a href="tel:+19082307844">908-230-7844</a> or send us a message below.
      </p>
      <ContactForm />
      <address className="mt-6 not-italic">
        Keller Williams Premier Properties
        <br />
        488 Springfield Ave, Summit, NJ 07901
      </address>
    </main>
  );
}
