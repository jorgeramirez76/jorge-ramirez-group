import { contactAction } from './contactAction';

export default function ContactForm({ subject = 'General Inquiry' }: { subject?: string }) {
  return (
    <form
      id="contact-form"
      action={contactAction}
      className="grid max-w-[720px] gap-3"
    >
      <input name="subject" defaultValue={subject} type="hidden" />
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
      <input type="hidden" name="_ts" value={`${Date.now()}`} />
      <div className="grid grid-cols-2 gap-3 max-[720px]:grid-cols-1">
        <label className="grid gap-1">
          Full Name
          <input name="name" required maxLength={120} className="w-full rounded-md border border-gray-300 p-2.5" />
        </label>
        <label className="grid gap-1">
          Email
          <input type="email" name="email" required maxLength={120} className="w-full rounded-md border border-gray-300 p-2.5" />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-3 max-[720px]:grid-cols-1">
        <label className="grid gap-1">
          Phone
          <input name="phone" required maxLength={30} className="w-full rounded-md border border-gray-300 p-2.5" />
        </label>
        <label className="grid gap-1">
          City of Interest
          <input name="city" maxLength={120} className="w-full rounded-md border border-gray-300 p-2.5" />
        </label>
      </div>
      <label className="grid gap-1">
        Message
        <textarea name="message" required rows={5} maxLength={2000} className="w-full rounded-md border border-gray-300 p-2.5" />
      </label>
      <button className="rounded-md bg-[var(--brand-red)] px-4 py-3 text-white">Send</button>
    </form>
  );
}
