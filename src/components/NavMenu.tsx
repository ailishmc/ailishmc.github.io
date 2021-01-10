import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

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

const navItem = css`
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.07rem;
    -webkit-text-decoration: none;
    text-decoration: none;

    color: rgba(17, 17, 17, 0.46);

    &:hover {
        cursor: pointer;
        color: rgba(17, 17, 17, 0.76);
    }
`
const navCss = css`
    width: fit-content;
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
                    <a css={navItem} href={nav.url}>
                        {nav.title}
                    </a>
                </li>
            )
        } else {
            navItems.push(
                <li>
                    <a
                        onClick={() => {
                            const top = document.getElementById(nav.title)
                                .offsetTop
                            window.scrollTo({ top, behavior: 'smooth' })
                        }}
                        css={navItem}
                    >
                        {nav.title}
                    </a>
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
