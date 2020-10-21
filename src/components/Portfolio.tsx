import React from 'react'
import { StyledH2, StyledP, StyledP2, StyledH3 } from '../styles'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const outerDiv = css`
    width: 100%;
    height: 100%;
    max-width: 540px;
    height: 400px;
    background: #ffffff;
    margin-bottom: 50px;
`

//placeholder
const imgDiv = css`
    width: 100%;
    height: 100%;
    max-width: 540px;
    height: 280px;
    background: #c4c4c4;
    float: top;
`

const PortfolioQuadrant = styled.div`
    height: 100%;
    display: flex;
    flex-flow: ${window.innerWidth > 1350 ? 'row' : 'column'} wrap;
    justify-content: ${window.innerWidth > 1350 ? 'space-between' : 'center'};
    align-content: center;
`

const textContainer = css`
    padding: 20px 0 0 20px;
`

const PortfolioItem = props => {
    const { title, description } = props

    return (
        <div css={outerDiv}>
            <div css={imgDiv}></div>
            <div css={textContainer}>
                <StyledH3 style={{ textAlign: 'left', paddingBottom: '10px' }}>
                    {title}
                </StyledH3>
                <StyledP2 style={{ textAlign: 'left' }}>{description}</StyledP2>
            </div>
        </div>
    )
}

const containerCss = css`
    height: 100%;
    padding-bottom: 50px;
`

const Portfolio = () => {
    const { portfolio } = useSiteMetadata()
    const items = []

    for (const item of portfolio) {
        items.push(
            <PortfolioItem title={item.title} description={item.blurb} />
        )
    }

    return (
        <div css={containerCss}>
            <StyledH2 id={'portfolio'}>Portfolio</StyledH2>
            <StyledP>Here are some select portfolio pieces</StyledP>
            <PortfolioQuadrant>{items}</PortfolioQuadrant>
        </div>
    )
}

export default Portfolio
