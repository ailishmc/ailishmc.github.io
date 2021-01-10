module.exports = {
    siteMetadata: {
        title: `AILISH MCCARTHY`,
        description: {
            heading: `Hi, I’m Ailish`,
            emoji: `👋`,
            pars: [
                `I’m a web developer and sometimes designer based in Dublin. I
                    have years of experience building accessibile and
                    highly performant enterprise applications. Currently working frontend at Workday but available for freelance work.`,
                `Please get in touch with your project ideas!`,
            ],
        },
        author: `@ailishmccarthy`,
        navs: [
            {
                title: 'services',
                url: '#Services',
                info: 'Below are just some of the services I offer',
            },
            {
                title: 'portfolio',
                url: '#Portfolio',
                info: 'Here are some select portfolio pieces',
            },
            {
                title: 'contact',
                url: 'mailto:ailishmccarthy94@gmail.com',
                info: '',
            },
        ],
        services: [
            {
                title: 'Web Design',
                blurb:
                    'I’ll collaborate with you to make a stylish looking website with a great user experience.',
            },
            {
                title: 'Web Development',
                blurb:
                    'I’ll take care of all the technical stuff. I can also mentor you to make handover as smooth and stress-free as possible.',
            },
            {
                title: 'Web Accessibility',
                blurb:
                    'I have years of experience building websites to an excellent standard so that they can be used by absolutely everyone.',
            },
        ],
        portfolio: [
            {
                title: 'Fitness Tracker App (iOS/Android)',
                blurb: 'Mobile App Design & Development',
            },
            { title: 'Festival Website Design', blurb: 'Web Design' },
            {
                title: 'Sustainable Online Portal ',
                blurb: 'Web Design & Development',
            },
            {
                title: 'Vintage Clothing Online Store',
                blurb: 'Web Design & Development (Shopify)',
            },
        ],
        socials: [
            'https://www.instagram.com/ailsmckails/',
            'https://twitter.com/AilishMcCarthy',
            'https://www.linkedin.com/in/ailishmccarthy/',
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/wave.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
