import { createContext, useContext, type ReactNode } from 'react';
import { translations, type Language, type TranslationKey } from '../data/translations';

interface I18nContextType {
  lang: Language;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const lang: Language = 'en';
  const t = (key: TranslationKey): string => translations.en[key] || key;

  return (
    <I18nContext.Provider value={{ lang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
