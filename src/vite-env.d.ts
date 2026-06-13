/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Deployed Google Apps Script Web App URL for form submissions. */
  readonly VITE_SHEET_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
