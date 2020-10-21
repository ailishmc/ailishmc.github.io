import React, { ReactElement, FunctionComponent } from 'react'
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
    flex-flow: ${window.innerWidth > 1320 ? 'row' : 'column'} nowrap;
    justify-content: space-between;
    align-items: ${window.innerWidth > 1320 ? 'flex-start' : 'center'};
`

type IconProps = {
    ellipseColor: string
}

const Icon: React.FunctionComponent<IconProps> = props => {
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

const ServicesIconGroup: React.FunctionComponent<ServicesIconGroupProps> = props => {
    const { ellipseColor, heading, blurb, children, style } = props

    const servicesIconCss = css`
        display: flex;
        width: ${window.innerWidth > 1320 ? `33%` : `100%`};
        flex-flow: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        /* TODO media query instead */
        margin-right: ${window.innerWidth > 1320 ? '30px' : '0px'};
        ${style};
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

const Services = () => {
    const { services } = useSiteMetadata()

    return (
        <div css={styles}>
            <div>
                <StyledH2 id={'services'}>Services</StyledH2>
                <StyledP>Below are just some of the services I offer</StyledP>
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
                    style={'margin-right: 0;'}
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
