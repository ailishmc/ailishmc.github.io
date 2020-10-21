import React from 'react'

import SEO from '../components/seo'
import Home from '../components/Home'
import Hero from '../components/Hero'
import Services from '../components/Services'
import { BrowserRouter as Router } from 'react-router-dom'
import Portfolio from '../components/Portfolio'

const IndexPage = () => (
    <Router>
        <Home>
            <SEO title="Home" />
            <Hero />
            <Services />
            <Portfolio />
        </Home>
    </Router>
)

export default IndexPage
