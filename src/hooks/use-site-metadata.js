import { useStaticQuery, graphql } from 'gatsby'
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        author
                        description {
                            heading
                            emoji
                            pars
                        }
                        author
                        navs {
                            title
                            url
                        }
                        services {
                            title
                            blurb
                        }
                        portfolio {
                            title
                            blurb
                        }
                        socials
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
