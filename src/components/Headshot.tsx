import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Headshot = () => {
    const data = useStaticQuery(graphql`
        query HeaderImageQuery {
            headerImage: file(relativePath: { eq: "headshot_nobg.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 460, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Img
            fadeIn={true}
            alt={'Ailish McCarthy Headshot'}
            fluid={data.headerImage.childImageSharp.fluid}
        />
    )
}

export default Headshot
