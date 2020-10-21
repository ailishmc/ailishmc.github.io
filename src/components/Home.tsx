import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { css } from "@emotion/core"

import Header from "./header"
import "./layout.css"
import { headerHeight } from "../styles"
import Footer from "./Footer"

const pagePadding = css`
    padding-left: 10%;
    padding-right: 10%;
`
const pageCss = css`
    ${pagePadding}
    padding-top: 100px;
    margin-top: ${headerHeight}px;
    background-color: #ffffff;
`

const Home = ({ children }) => {
    const { title, navs } = useSiteMetadata()

    return (
        <>
            <Header padding={pagePadding} siteTitle={title} navs={navs} />
            <div css={pageCss}>
                <main>{children}</main>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home
