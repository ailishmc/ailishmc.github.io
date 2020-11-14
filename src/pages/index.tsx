import React from 'react'

import SEO from '../components/Seo'
import Home from '../components/Home'
import Hero from '../components/Hero'
import Services from '../components/Services'
import { BrowserRouter as Router } from 'react-router-dom'
import Portfolio from '../components/Portfolio'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const IndexPage = () => {
    const { navs, title, lang, author, description } = useSiteMetadata()
    const { heading, emoji, par1, par2 } = description

    return (
        <Router>
            <Home>
                <SEO title={title} lang={lang} author={author} />
                <Hero heading={heading} emoji={emoji} par1={par1} par2={par2} />
                <Services title={navs[0].title} info={navs[0].info} />
                <Portfolio title={navs[1].title} info={navs[1].info} />
            </Home>
        </Router>
    )
}
export default IndexPage
