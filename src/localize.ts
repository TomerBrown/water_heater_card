import en from "../translations/en.json";
import he from "../translations/he.json";

type Translations = Record<string, string>;

const translations: Record<string, Translations> = { en, he };

export function localize(
  key: string,
  language: string | undefined,
  vars?: Record<string, string | number>,
): string {
  const lang = language ? language.toLowerCase().split("-")[0] : "en";
  const bundle: Translations = translations[lang] ?? translations["en"];
  const template: string = bundle[key] ?? translations["en"][key] ?? key;

  if (!vars) return template;

  return template.replace(/\{(\w+)\}/g, (match, name) =>
    name in vars ? String(vars[name]) : match,
  );
}
