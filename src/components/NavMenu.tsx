import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { HashLink as Link } from 'react-router-hash-link'

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
        navItems.push(
            <li>
                <Link
                    scroll={el =>
                        el.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        })
                    }
                    css={navItem}
                    to={nav.url}
                >
                    {nav.title}
                </Link>
            </li>
        )
    }

    return (
        <nav css={navCss}>
            <ListContainer>{navItems}</ListContainer>
        </nav>
    )
}

export default NavMenu
