import styled from "@emotion/styled"
import React from "react"
import { headerHeight } from "../styles"
import NavMenu from "./NavMenu"
import { SerializedStyles, css } from "@emotion/core"

const HeaderStyled = styled.header`
    position: fixed;
    height: ${headerHeight}px;
    width: 100%;
    top: 0px;
    margin: auto;
    z-index: 50;
    background: #ffe7db;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`

const TitleStyled = styled.h1`
    display: inline-block;
    width: fit-content;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    word-wrap: break-word;

    color: rgba(17, 17, 17, 0.76);
`

const relativeContainer = css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding: 30px 0;
    height: ${headerHeight}px;
`

interface HeaderProps {
    siteTitle: string
    padding: SerializedStyles
    navs?: []
}

const Header = ({ siteTitle, padding, navs }: HeaderProps) => (
    <HeaderStyled css={padding}>
        <div css={relativeContainer}>
            <TitleStyled> {siteTitle} </TitleStyled>
            {navs && <NavMenu navs={navs}></NavMenu>}
        </div>
    </HeaderStyled>
)

export default Header
