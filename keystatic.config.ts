import { config, fields, collection } from '@keystatic/core';

const isDevelopment = process.env.NODE_ENV === 'development';

export default config({
  storage: isDevelopment
    ? { kind: 'local' }
    : { kind: 'github', repo: 'RobertGjoshevski/NewWebTemplate' },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        featuredImage: fields.image({ label: 'Featured Image' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
