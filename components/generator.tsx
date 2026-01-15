import { getPageImage, source } from "@/lib/source";
import {
    DocsBody,
    DocsDescription,
    DocsPage,
    DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";

import type { Metadata } from "next";

export function generatePage(slugs: string[]) {
    return async function Page() {
        const page = source.getPage(slugs);
        if (!page) notFound();

        const MDX = page.data.body;

        return (
            <DocsLayout
                tree={source.getPageTree()}
                sidebar={{
                    enabled: false,
                    tabs: false,
                }}
            >
                <DocsPage toc={page.data.toc} full={page.data.full} footer={{enabled: false}}>
                    <DocsTitle>{page.data.title}</DocsTitle>
                    <DocsDescription>{page.data.description}</DocsDescription>
                    <DocsBody>
                        <MDX
                            components={getMDXComponents({
                                a: createRelativeLink(source, page),
                            })}
                        />
                    </DocsBody>
                </DocsPage>
            </DocsLayout>
        );
    };
}

export function getGenerateMetadata(slugs: string[]) {
    return async function generateMetadata(): Promise<Metadata> {
        const page = source.getPage(slugs);
        if (!page) notFound();

        return {
            title: page.data.title,
            description: page.data.description,
            openGraph: {
                images: getPageImage().url,
            },
        };
    };
}
