import React, { RefObject } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const imgCss = css`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

const Headshot = () => {
    const data = useStaticQuery(graphql`
        query HeaderImageQuery {
            headerImage: file(relativePath: { eq: "headshot_bw.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 473, maxHeight: 560, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Img
            css={imgCss}
            fadeIn={true}
            alt={"Ailish McCarthy Headshot"}
            fluid={data.headerImage.childImageSharp.fluid}
        />
    )
}

export default Headshot
