import React, { useEffect, RefObject, useRef } from 'react'
import Headshot from '../components/Headshot'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Twitter, Linkedin, Instagram } from 'react-feather'
import { StyledP, VisuallyHidden } from '../styles'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const containerCss = css`
    visibility: hidden;
    display: flex;
    justify-content: space-between;
`

const blurbCss = css`
    max-width: 470px;
    margin-left: 25px;
    position: relative;

    h2 {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: calc(21.6px + 1vw);
        line-height: calc(29.6px + 1vw);
        word-wrap: nowrap;

        color: #000000;
    }
`

const headshotContainer = css`
    position: relative;
    width: 100%;
    max-width: 473px;
    max-height: 560px;
`

const SocialContainer = styled.div`
    float: right;

    a {
        margin-left: 30px;
    }
`

const br = css`
    margin-top: 10px;
    display: block;
    content: '';
`

const SocialLink = styled.a`
    opacity: 0;
`

const animate = {
    opacity: 1,
    rotate: [-15, 0, 15, 0, -15, 0, 15, 0, -15, 0, 15, 0, -15, 0, 15, 0],
    transition: { delay: 1.2, duration: 2 },
}

const hideTextCss = css`
    margin-bottom: 20px;
    overflow: hidden;
`

const parCss = css`
    text-align: left;
    opacity: 0;
`

const Hero = () => {
    const containerRef: RefObject<HTMLDivElement> = React.createRef()
    const h2Ref: RefObject<HTMLDivElement> = React.createRef()
    const parRef: RefObject<HTMLDivElement> = React.createRef()

    const socialOne: RefObject<HTMLAnchorElement> = React.createRef()
    const socialTwo: RefObject<HTMLAnchorElement> = React.createRef()
    const socialThree: RefObject<HTMLAnchorElement> = React.createRef()

    const isDone = useRef(false)

    var tl = gsap.timeline()

    useEffect(() => {
        gsap.to(containerRef.current, 0, { css: { visibility: 'visible' } })

        if (!isDone.current) {
            tl.from(h2Ref.current, {
                duration: 1,
                y: 60,
                ease: 'power3.out',
                delay: 0.8,
                stagger: 5,
            })
                .to(parRef.current, {
                    duration: 1.5,
                    delay: 1,
                    opacity: 1,
                    ease: 'power3.in',
                })
                .to(socialOne.current, {
                    duration: 1,
                    opacity: 1,
                    ease: 'power3.in',
                })
                .to(socialTwo.current, {
                    delay: -0.5,
                    duration: 1,
                    opacity: 1,
                    ease: 'power3.in',
                })
                .to(socialThree.current, {
                    delay: -0.5,
                    duration: 1,
                    opacity: 1,
                    ease: 'power3.in',
                })

            isDone.current = true
        }
    })

    return (
        <div css={containerCss} ref={containerRef}>
            <div css={headshotContainer}>
                {/* TODO: cut out headshot background */}
                <Headshot />
            </div>
            <div>
                <div css={blurbCss}>
                    <div css={hideTextCss}>
                        <h2 ref={h2Ref}>
                            Hi, I’m Ailish&nbsp;
                            <motion.div
                                style={{ display: 'inline-block' }}
                                initial={{ opacity: 0 }}
                                animate={animate}
                            >
                                👋
                            </motion.div>
                        </h2>
                    </div>
                    <div>
                        <StyledP ref={parRef} css={parCss}>
                            I’m a web developer and designer from Ireland. I
                            have years of experience building accessibile and
                            highly performant enterprise applications and am now
                            moving into the freelancing space. Please get in
                            touch with your project ideas!
                            <br css={br} />
                            I’m especially excited to collaborate on creative
                            work.
                        </StyledP>
                    </div>
                </div>
                <SocialContainer>
                    <SocialLink ref={socialOne} href="">
                        <VisuallyHidden>Facebook</VisuallyHidden>
                        <Instagram color="#FC6450" aria-hidden={'true'} />
                    </SocialLink>
                    <SocialLink ref={socialTwo} href="">
                        <VisuallyHidden>Twitter</VisuallyHidden>
                        <Twitter color="#FF8F2C" aria-hidden={'true'} />
                    </SocialLink>
                    <SocialLink ref={socialThree} href="">
                        <VisuallyHidden>LinkedIn</VisuallyHidden>
                        <Linkedin color="#FFC000" aria-hidden={'true'} />
                    </SocialLink>
                </SocialContainer>
            </div>
        </div>
    )
}

export default Hero
