import React from 'react'

import SEO from '../components/Seo'
import Home from '../components/Home'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const IndexPage = () => {
    const {
        navs,
        title,
        lang,
        author,
        desc,
        socials,
    } = useSiteMetadata()
    const { heading, emoji, pars } = desc

    return (
            <Home>
                <SEO title={title} lang={lang} author={author} />
                <Hero
                    heading={heading}
                    emoji={emoji}
                    pars={pars}
                    socials={socials}
                />
                <Services title={navs[0].title} info={navs[0].info} />
                <Portfolio title={navs[1].title} info={navs[1].info} />
            </Home>
    )
}
export default IndexPage
