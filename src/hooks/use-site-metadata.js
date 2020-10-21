import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        description
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
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
