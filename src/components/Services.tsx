import React, { FunctionComponent } from 'react'
import { StyledH2, StyledP, StyledP2, StyledH3, StyledAnchor } from '../styles'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const servicesContainer = css`
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
`

const IconContainer = styled.div`
    display: flex;

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

const indented = css`
    padding-left: 1.5em;
`

const ICanHelp = () => {
    return <StyledAnchor css={{fontSize: 'inherit', letterSpacing: 'inherit'}} href={'mailto:ailishmccarthy94@gmail.com'}>I can help</StyledAnchor>;
}

interface ServicesProps {
    title: string
    info: string
}

const Services = (props: ServicesProps) => {

    const title = props.title
    const info = props.info

    return (
        <div>
            <div id="services" css={servicesContainer}>
                <div>
                    <StyledH2 id={title}>{title}</StyledH2>
                    <StyledP>{info}</StyledP>
                </div>
                <IconContainer>
                    <StyledP>
                        <StyledP>Are you:</StyledP>
                        <div css={indented}>
                            <StyledP>
                                🎨 A designer...
                                <div css={indented}>
                                    <ul>
                                        <li>
                                            in need of a developer to pair up
                                            with on a website? <ICanHelp />
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            doing your own development but in
                                            need of some developer office hours?{' '}
                                            <ICanHelp />
                                        </li>
                                    </ul>
                                </div>
                            </StyledP>
                            <StyledP>
                                💼 A small business owner...
                                <div css={indented}>
                                    <ul>
                                        <li>
                                            in need of a quick website or
                                            Shopify set up? <ICanHelp />
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            looking for something more bespoke
                                            and tailored? <ICanHelp />
                                        </li>
                                    </ul>
                                </div>
                            </StyledP>
                            <StyledP>
                                🚀 A company/startup...
                                <div css={indented}>
                                    <ul>
                                        <li>
                                            creating a website or webapp and in
                                            need of a freelancer to develop it?{' '}
                                            <ICanHelp />
                                        </li>
                                    </ul>
                                </div>
                            </StyledP>
                            <StyledP>
                                💡 A person with a cool idea...
                                <div css={indented}>
                                    <ul>
                                        <li>
                                            needing someone to build it?{' '}
                                            <ICanHelp />
                                        </li>
                                    </ul>
                                </div>
                            </StyledP>
                            <StyledP>
                                🚫 None of the above?
                                <div css={indented}>
                                    <ul>
                                        <li>
                                            Reach out anyway, maybe <ICanHelp />
                                        </li>
                                    </ul>
                                </div>
                            </StyledP>
                        </div>
                    </StyledP>
                </IconContainer>
            </div>
            <div id="skills" css={servicesContainer}>
                <IconContainer>
                    <StyledP>
                        <div>
                            <StyledH2>{'skills'}</StyledH2>
                            <StyledP>{info}</StyledP>
                        </div>
                        <ul>
                            <li>👩‍💻 Code</li>
                            <li css={{ paddingLeft: '2em' }}>
                                HTML, CSS/SCSS, JavaScript (ES6), NodeJS, Java,
                                React, Redux, Sass, EmotionJS, Typescript,{' '}
                                <br />
                                Jest, Enzyme, Cypress, REST, GraphQL, MongoDB,
                                Mongoose, React Native, Webpack, AWS
                            </li>
                            <li>💁‍♀️ Other</li>
                            <li css={{ paddingLeft: '2em' }}>
                                Shopify, Figma, Web Accessibility
                            </li>
                        </ul>
                    </StyledP>
                </IconContainer>
            </div>
        </div>
    )
}

export default Services
