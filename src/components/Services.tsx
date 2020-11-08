import React, { FunctionComponent } from 'react'
import { StyledH2, StyledP, StyledP2, StyledH3 } from '../styles'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { PenTool, Code, ThumbsUp } from 'react-feather'

const styles = css`
    padding: 100px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`

const IconContainer = styled.div`
    display: flex;

    /* TODO media query instead */
    /* flex-flow: ${window.innerWidth > 1320 ? 'row' : 'column'} nowrap;
    justify-content: space-between;
    align-items: ${window.innerWidth > 1320 ? 'flex-start' : 'center'}; */

    /* deconstructed pancake */
    flex-wrap: wrap;
    justify-content: center;
`

type IconProps = {
    ellipseColor: string
}

const Icon: FunctionComponent<IconProps> = props => {
    const { ellipseColor, children } = props

    const Ellipse = styled.div`
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-bottom: 10px;
        position: relative;

        background-color: ${ellipseColor};
    `

    return <Ellipse>{children}</Ellipse>
}

type ServicesIconGroupProps = {
    heading: string
    blurb: string
    ellipseColor: string
    style?: string
}

const ServicesIconGroup: FunctionComponent<ServicesIconGroupProps> = props => {
    const { ellipseColor, heading, blurb, children, style } = props

    const servicesIconCss = css`
        /* width: ${window.innerWidth > 1320 ? `33%` : `100%`}; */
        /* TODO media query instead */
        /* margin-right: ${window.innerWidth > 1320 ? '30px' : '0px'}; */

        flex: 0 1 300px;
        margin: 30px;
        display: grid;
        place-items: center;
        align-items: start;
        grid-auto-rows: min-content;

        ${style}
    `

    return (
        <div css={servicesIconCss}>
            <Icon ellipseColor={ellipseColor}>{children}</Icon>
            <StyledH3>{heading}</StyledH3>
            <StyledP2>{blurb}</StyledP2>
        </div>
    )
}

const iconCss = css`
    position: relative;
    top: 35%;
    left: 35%;
`

interface ServicesProps {
    title: string
    info: string
}

const Services = (props: ServicesProps) => {
    const { services } = useSiteMetadata()

    const title = props.title
    const info = props.info

    return (
        <div css={styles}>
            <div>
                <StyledH2 id={title}>{title}</StyledH2>
                <StyledP>{info}</StyledP>
            </div>
            <IconContainer>
                <ServicesIconGroup
                    heading={services[0]?.title}
                    blurb={services[0]?.blurb}
                    ellipseColor={'#FFE6E2'}
                >
                    <PenTool css={iconCss} color={'#FC6450'} size={34} />
                </ServicesIconGroup>
                <ServicesIconGroup
                    heading={services[1]?.title}
                    blurb={services[1]?.blurb}
                    ellipseColor={'#FFE1D4'}
                >
                    <Code css={iconCss} color={'#FF631F'} size={34} />
                </ServicesIconGroup>
                <ServicesIconGroup
                    heading={services[2]?.title}
                    blurb={services[2]?.blurb}
                    ellipseColor={'#FFF9C8'}
                >
                    <ThumbsUp css={iconCss} color={'#E3CD03'} size={34} />
                </ServicesIconGroup>
            </IconContainer>
        </div>
    )
}

export default Services
