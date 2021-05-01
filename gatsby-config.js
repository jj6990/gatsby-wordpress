const path = process.env.WP_ADDRESS

require("dotenv").config({
    path: `.env.${path}`,
});


module.exports = {
    siteMetadata: {
        title: `Warenhaus`,
        description: `La mejor calidada para tu hogar`,
        author: `Juan Terneus`,
    },
    plugins: [
        /*
         * Gatsby's data processing layer begins with “source”
         * plugins. Here the site sources its data from WordPress.
         */
        // highlight-start
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                /*
                 * The full URL of the WordPress site's GraphQL API.
                 * Example : 'https://www.example-site.com/graphql'
                 */

                url: `https://dev.develup.tech/graphql`,
                schema: {
                    //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
                    typePrefix: `Wp`,
                },
                develop: {
                    //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
                    hardCacheMediaFiles: true,
                },
                type: {
                    Post: {
                        limit:
                            process.env.NODE_ENV === `development`
                                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                                50
                                : // and we don't actually need more than 5000 in production for this particular site
                                5000,
                    },
                },
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
        },
        // highlight-end
        /**
         * The following plugins aren't required for gatsby-source-wordpress,
         * but we need them so the default starter we installed above will keep working.
         **/
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
    ],
}