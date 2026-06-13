// Sends form submissions to the Google Sheet via the Apps Script Web App.
//
// Set VITE_SHEET_ENDPOINT in .env.local to the deployed Web App URL
// (see google-apps-script/README.md for the one-time setup).
//
// We POST as text/plain so the browser does NOT fire a CORS preflight, and
// use mode:"no-cors" because Apps Script Web Apps don't return CORS headers.
// The response is opaque, so we treat a completed request as success — this
// is the standard, reliable pattern for posting to Apps Script from a SPA.

const ENDPOINT = import.meta.env.VITE_SHEET_ENDPOINT as string | undefined;

export type SheetForm =
  | "contact"
  | "newsletter"
  | "challenge-heal";

/** Read a File as a base64 data URL (used for challenge screenshot uploads). */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

/**
 * Submit a form payload to the sheet. Resolves on success, throws on failure.
 * `form` selects the destination tab; `data` is a flat key→value object.
 */
export async function submitToSheet(
  form: SheetForm,
  data: Record<string, unknown>
): Promise<void> {
  if (!ENDPOINT) {
    // No endpoint configured yet (e.g. local dev before setup). Log so the
    // developer sees exactly what WOULD be sent, and resolve so the UI flow
    // can still be tested end-to-end.
    // eslint-disable-next-line no-console
    console.info("[submitToSheet] VITE_SHEET_ENDPOINT not set. Would send:", {
      form,
      data,
    });
    return;
  }

  await fetch(ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ form, data }),
  });
}
