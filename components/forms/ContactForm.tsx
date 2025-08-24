"use client";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { contactAction } from "./contactAction";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button className="bg-black text-white border border-white px-5 py-3 rounded-2xl" disabled={pending}>{pending ? "Sending…" : "Send"}</button>;
}

export default function ContactForm({ subject = "General Inquiry" }: { subject?: string }) {
  const [state, action] = useFormState(contactAction, {
    ok: false,
    error: null as string | null,
  });
  useEffect(() => {
    if (state.ok) (document.getElementById("contact-form") as HTMLFormElement)?.reset();
  }, [state.ok]);
  return (
    <form id="contact-form" action={action} className="contact">
      <input name="subject" defaultValue={subject} type="hidden" />
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
      <input type="hidden" name="_ts" value={`${Date.now()}`} />
      <div className="row">
        <label>
          Full Name
          <input name="name" required maxLength={120} />
        </label>
        <label>
          Email
          <input type="email" name="email" required maxLength={120} />
        </label>
      </div>
      <div className="row">
        <label>
          Phone
          <input name="phone" required maxLength={30} />
        </label>
        <label>
          City of Interest
          <input name="city" maxLength={120} />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" required rows={5} maxLength={2000} />
      </label>
      <SubmitButton />
      {state.error && <p className="err">{state.error}</p>}
      {state.ok && <p className="ok">Thanks! We’ll reach out shortly.</p>}
      <style jsx>{`
        .contact {
          display: grid;
          gap: 12px;
          max-width: 720px;
        }
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        input,
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
        }
        .ok { color: green; }
        .err { color: #b00020; }
        @media (max-width: 720px) { .row { grid-template-columns: 1fr; } }
      `}</style>
    </form>
  );
}
