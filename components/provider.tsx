"use client";
import { RootProvider } from "fumadocs-ui/provider/next";
import { type ReactNode } from "react";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
    defaultLanguage: "en",
    languages: ["en", "zh"],
    hideLocale: "default-locale",
});

const { provider } = defineI18nUI(i18n, {
    translations: {
        en: { displayName: "English" },
        zh: {
            displayName: "中文",
            toc: "本页目录",
            search: "搜索文档",
            searchNoResult: "无结果",
            previousPage: "上一页",
            nextPage: "下一页",
            lastUpdate: "最后更新于",
            chooseLanguage: "选择语言",
        },
    },
});

export function Provider({ children, lang }: { children: ReactNode, lang: string }) {
    return <RootProvider i18n={provider(lang)}>{children}</RootProvider>;
}
