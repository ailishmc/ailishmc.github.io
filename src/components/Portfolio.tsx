import React from 'react'
import { StyledH2, StyledP, StyledP2, StyledH3 } from '../styles'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { pagePaddingValue } from './Home'

const PortfolioQuadrant = styled.div`
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;

    margin-left: -${pagePaddingValue}vw;
`
const outerDiv = css`
    position: relative;
    width: 100%;
    height: 100%;

    &:hover {
        div {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            cursor: pointer;
        }
    }
`

//placeholder
const imgDiv = css`
    width: 100%;
    height: 100%;
    height: 280px;
    background: #c4c4c4;

    clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
    transition: clip-path 0.5s ease-in-out;
`

// TODO make link
const textContainer = css`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;

    display: grid;
    place-items: center;
`

const PortfolioItem = props => {
    const { title, description } = props

    return (
        <div css={outerDiv}>
            <div css={imgDiv}></div>
            <div css={textContainer}>
                <div>
                    <StyledH3 style={{ paddingBottom: '10px' }}>
                        {title}
                    </StyledH3>
                    <StyledP2>{description}</StyledP2>
                </div>
            </div>
        </div>
    )
}

const containerCss = css`
    height: 100%;
    padding-bottom: 50px;
`

interface PortfolioProps {
    title: string
    info: string
}

const Portfolio = (props: PortfolioProps) => {
    const { portfolio } = useSiteMetadata()
    const items = []

    for (const item of portfolio) {
        items.push(
            <PortfolioItem title={item.title} description={item.blurb} />
        )
    }

    return (
        <div css={containerCss}>
            <StyledH2 id={props.title}>{props.title}</StyledH2>
            <StyledP>{props.info}</StyledP>
            <PortfolioQuadrant>{items}</PortfolioQuadrant>
        </div>
    )
}

export default Portfolio
