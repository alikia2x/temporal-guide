import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
    defaultLanguage: "en",
    languages: ["en", "fr", "cn"],
    // Optional: hide the locale prefix for your default language (e.g., /en/page -> /page)
    hideLocale: "default-locale",
});
