import React from 'react'
import { css } from '@emotion/core'

const footerBar = css`
    width: 100vw;
    height: 270px;

    background: #ffe7db;
`

const flexColumn = css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`

const text = css`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 15px;

    color: rgba(17, 17, 17, 0.46);
`

const contact = css`
    width: 170px;
    height: 55px;
    margin-bottom: 15px;

    background: #da4900;
    border-radius: 12px;
    border: none;
    outline: none;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;

    text-align: center;
    color: #fffdfd;

    :hover {
        cursor: pointer;
    }
`

const CV = css`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    text-decoration-line: underline;

    color: rgba(17, 17, 17, 0.46);
    background-color: transparent;
    border: none;
    outline: none;

    :hover {
        cursor: pointer;
    }
`

const Footer = () => {
    return (
        <div id={'contact'} css={footerBar}>
            <div css={flexColumn}>
                <div css={text}>Hire Me!</div>
                <button css={contact}>Contact</button>
                <button css={CV}>Download my CV!</button>
            </div>
            <footer style={{ color: '#ffffff' }}>
                © {new Date().getFullYear()}, Ailish McCarthy
            </footer>
        </div>
    )
}

export default Footer
