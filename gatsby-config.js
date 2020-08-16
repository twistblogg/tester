require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "TwistBlogg",
    description: "TwistBlogg is an information resource site for Bloggers and Geeks.Here we focus on SEO, Blogging, Blogging Widgets, Tips and Tricks related to Social Media and Web Apps.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: `@reflexjs/gatsby-plugin-search-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        adminKey: process.env.ALGOLIA_ADMIN_KEY,
        searchKey: process.env.ALGOLIA_SEARCH_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        types: [`Page`, `Post`],
      },
    },
    "@reflexjs/gatsby-theme-post",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        debug: true,
        global: {
          title: "TwistBlogg - Get Premium Blogger Tutorials",
          description: "TwistBlogg is an information resource site for Bloggers and Geeks.Here we focus on SEO, Blogging, Blogging Widgets, Tips and Tricks related to Social Media and Web Apps.",
          image: "how to use font awesome in blogger.png",
        },
        types: [
          `Page`,
          `Post`,
          {
            type: `PostTag`,
            defaults: {
              title: (tag) => {tag.name},
            },
          },
        ],
        paths: [
          {
            pathname: `/blog{,/**}`,
            defaults: {
              title: `Blog | TwistBlogg - Get Premium Blogger Tutorials`,
            },
          },
        ],
      }
    }
  ],
}
