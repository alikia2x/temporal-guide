import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
    baseUrl: "/",
    source: docs.toFumadocsSource(),
    plugins: [],
});

export function getPageImage() {
    return {
        url: `/og.png`,
    };
}

export async function getLLMText(page: InferPageType<typeof source>) {
    const processed = await page.data.getText("processed");

    return `# ${page.data.title}

${processed}`;
}
