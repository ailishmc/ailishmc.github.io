import styled from '@emotion/styled'

export const headerHeight = 100

export const StyledH2 = styled.h2`
    padding-top: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 0.15rem;
    line-height: 36px;
    text-align: center;
    padding-bottom: 10px;

    color: #4f4f4f;
`

export const StyledH3 = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    padding-bottom: 10px;
    text-align: center;

    color: #4f4f4f;
`

export const StyledP = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding-bottom: 1.5rem;
    letter-spacing: 0.02rem;
    text-align: inherit;

    color: #6a6a6a;
`

export const VisuallyHidden = styled.div`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
`

export const StyledAnchor = styled.a`
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.09rem;

    color: rgba(17, 17, 17, 0.46);

    &:hover {
        cursor: pointer;
        color: rgba(17, 17, 17, 0.76);
    }
`
