import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Astro Learner Blog by Junya Kobayashi',
        description: 'My personal blog portfolio',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: '<language>en-us</language>',
    });
}