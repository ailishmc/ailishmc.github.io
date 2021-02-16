import React from 'react'
import { StyledH2, StyledP, StyledAnchor } from '../styles'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

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
