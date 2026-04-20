/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {
  readonly TELEGRAM_BOT_TOKEN: string;
  readonly TELEGRAM_CHAT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
