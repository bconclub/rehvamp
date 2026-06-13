# Wiring the website forms to Google Sheets

The website posts every form submission to a **Google Apps Script Web App**
that is bound to your spreadsheet. It appends each submission as a new row in
the right tab, creating the tab + header row automatically the first time.

Spreadsheet: <https://docs.google.com/spreadsheets/d/1oJ1UxgqIs423FVppLMWPjrSpUJZa8-kwLMD7p1EhV9k/edit>

## Forms → tabs

| Website form                        | Tab                 |
| ----------------------------------- | ------------------- |
| Contact page                        | `Contact Enquiries` |
| Newsletter (home footer + blog)     | `Newsletter Signups`|
| HEAL Challenge sign-up (Phase 1)    | `HEAL Challenge`    |

> If your sheet already has tabs with different names, just edit the `TABS`
> object at the top of `Code.gs` to match them. Otherwise the script creates
> these tabs for you with headers.

HEAL Challenge screenshot uploads are saved to a Drive folder named
**Rehvamp Challenge Uploads** and the row stores a shareable link to each file.

## One-time setup (≈ 5 minutes)

1. Open the spreadsheet → **Extensions → Apps Script**.
2. Delete any sample code, then paste the entire contents of **`Code.gs`**.
   Save (💾).
3. Click **Deploy → New deployment**.
   - **Select type** → ⚙️ → **Web app**.
   - **Description**: `Rehvamp form intake`.
   - **Execute as**: **Me**.
   - **Who has access**: **Anyone**.
   - **Deploy**. Approve the permissions prompt (it needs access to the sheet
     and to Drive for uploads).
4. Copy the **Web app URL** (ends in `/exec`).
5. Test it: paste the URL in a browser. You should see
   `{"ok":true,"service":"Rehvamp form intake"}`.

## Connect the website

1. In the project root, create a file named **`.env.local`**:

   ```
   VITE_SHEET_ENDPOINT=https://script.google.com/macros/s/XXXXXXXX/exec
   ```

   (use the `/exec` URL from step 4 above)

2. **Local:** restart `npm run dev` so Vite picks up the new env var.

3. **Production (Vercel):** add the same variable in
   **Vercel → Project → Settings → Environment Variables**
   (`VITE_SHEET_ENDPOINT` = the `/exec` URL), then redeploy.

That's it — submissions will start landing in the sheet.

## Updating the script later

If you change `Code.gs`, in Apps Script do **Deploy → Manage deployments →
edit (✏️) → Version: New version → Deploy**. The URL stays the same, so you
don't need to touch the website env var.
