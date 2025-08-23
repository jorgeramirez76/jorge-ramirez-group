'use server';
import { z } from 'zod';

const schema = z.object({
  subject: z.string().max(120).default('General Inquiry'),
  name: z.string().min(2).max(120),
  email: z.string().email().max(120),
  phone: z.string().min(7).max(30),
  city: z.string().max(120).optional().nullable(),
  message: z.string().min(10).max(2000),
  _hp: z.string().optional(),
  _ts: z.string().optional()
});

export async function contactAction(_: any, formData: FormData) {
  const input = Object.fromEntries(formData) as Record<string, string>;
  const parsed = schema.safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Please check your inputs.' };

  // anti-spam
  if (parsed.data._hp) return { ok: true, error: null };
  if (!parsed.data._ts || Date.now() - Number(parsed.data._ts) < 2000)
    return { ok: false, error: 'Slow down and try again.' };

  // forward to CRM (optional)
  try {
    if (process.env.CRM_WEBHOOK_URL) {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...parsed.data, ts: new Date().toISOString() })
      });
    }
    return { ok: true, error: null };
  } catch {
    return { ok: false, error: 'Submission failed. Please call 908-230-7844.' };
  }
}
