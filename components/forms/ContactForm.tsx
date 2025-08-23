'use client';
import { useEffect, useState, useTransition } from 'react';
import { contactAction } from './contactAction';

export default function ContactForm({ subject = 'General Inquiry' }: { subject?: string }) {
  const [state, setState] = useState<{ ok: boolean; error: string | null }>({ ok: false, error: null });
  const [pending, startTransition] = useTransition();

  async function action(formData: FormData) {
    startTransition(async () => {
      const res = await contactAction(null, formData);
      setState(res);
    });
  }

  useEffect(() => {
    if (state.ok) (document.getElementById('contact-form') as HTMLFormElement)?.reset();
  }, [state.ok]);

  return (
    <form id="contact-form" action={action} className="grid max-w-[720px] gap-3">
      <input name="subject" defaultValue={subject} type="hidden" />
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" className="hidden" />
      <input type="hidden" name="_ts" value={`${Date.now()}`} />
      <div className="grid grid-cols-2 gap-3 max-[720px]:grid-cols-1">
        <label>
          Full Name
          <input name="name" required maxLength={120} className="w-full rounded-md border border-gray-300 p-2.5" />
        </label>
        <label>
          Email
          <input type="email" name="email" required maxLength={120} className="w-full rounded-md border border-gray-300 p-2.5" />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-3 max-[720px]:grid-cols-1">
        <label>
          Phone
          <input name="phone" required maxLength={30} className="w-full rounded-md border border-gray-300 p-2.5" />
        </label>
        <label>
          City of Interest
          <input name="city" maxLength={120} className="w-full rounded-md border border-gray-300 p-2.5" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" required rows={5} maxLength={2000} className="w-full rounded-md border border-gray-300 p-2.5" />
      </label>
      <button
        disabled={pending}
        className="rounded-md bg-[#cc0000] px-4 py-3 text-white disabled:opacity-50"
      >
        {pending ? 'Sending…' : 'Send'}
      </button>
      {state.error && <p className="text-[#b00020]">{state.error}</p>}
      {state.ok && <p className="text-green-600">Thanks! We’ll reach out shortly.</p>}
    </form>
  );
}
