export const revalidate = 604800;

export default function PrivacyPolicy() {
  return (
    <main className="max-w-[900px] mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>Effective: {new Date().getFullYear()}</p>
      <h2 className="mt-6 text-xl font-semibold">Information We Collect</h2>
      <p>Contact details you submit (name, email, phone), property preferences, and site analytics.</p>
      <h2 className="mt-6 text-xl font-semibold">How We Use It</h2>
      <p>To respond to inquiries, provide real estate services, and improve the site.</p>
      <h2 className="mt-6 text-xl font-semibold">Sharing</h2>
      <p>We do not sell personal information. We may share with vendors (e.g., CRM, analytics) under contract.</p>
      <h2 className="mt-6 text-xl font-semibold">Retention</h2>
      <p>We typically retain inquiry records for up to 24 months unless required longer by law.</p>
      <h2 className="mt-6 text-xl font-semibold">Your Choices</h2>
      <p>
        Email <a href="mailto:jorge.ramirez@kw.com">jorge.ramirez@kw.com</a> to access or delete your data.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Contact</h2>
      <p>The Jorge Ramirez Group, 488 Springfield Ave, Summit, NJ 07901</p>
    </main>
  );
}
