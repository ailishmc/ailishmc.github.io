import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {StyledAnchor} from '../styles'

const ListContainer = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    list-style-type: none;

    li {
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
`

const navCss = css`
    width: fit-content;
`

const noUnderline = css`
    text-decoration: none;
`
interface NavMenuProps {
    navs: { title: string; url: string }[]
}

const NavMenu = ({ navs }: NavMenuProps) => {
    const navItems = []

    for (const nav of navs) {
        if (nav.title == 'contact') {
            navItems.push(
                <li>
                    <StyledAnchor css={noUnderline} href={nav.url}>
                        {nav.title}
                    </StyledAnchor>
                </li>
            )
        } else {
            navItems.push(
                <li>
                    <StyledAnchor
                        css={noUnderline}
                        onClick={() => {
                            const top = document?.getElementById(nav.title)
                                .offsetTop
                            window?.scrollTo({ top, behavior: 'smooth' })
                        }}
                    >
                        {nav.title}
                    </StyledAnchor>
                </li>
            )
        }
    }

    return (
        <nav css={navCss}>
            <ListContainer>{navItems}</ListContainer>
        </nav>
    )
}

export default NavMenu
