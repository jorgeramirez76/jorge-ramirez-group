export const revalidate = 604800;

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-[900px] p-8">
      <h1>Privacy Policy</h1>
      <p>Effective: {new Date().getFullYear()}</p>
      <h2>Information We Collect</h2>
      <p>
        Contact details you submit (name, email, phone), property preferences,
        and site analytics.
      </p>
      <h2>How We Use It</h2>
      <p>
        To respond to inquiries, provide real estate services, and improve the
        site.
      </p>
      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We may share with vendors (e.g.,
        CRM, analytics) under contract.
      </p>
      <h2>Retention</h2>
      <p>
        We typically retain inquiry records for up to 24 months unless required
        longer by law.
      </p>
      <h2>Your Choices</h2>
      <p>
        Email <a href="mailto:jorge.ramirez@kw.com">jorge.ramirez@kw.com</a> to
        access or delete your data.
      </p>
      <h2>Contact</h2>
      <p>The Jorge Ramirez Group, 488 Springfield Ave, Summit, NJ 07901</p>
    </main>
  );
}
