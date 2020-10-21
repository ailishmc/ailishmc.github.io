import styled from "@emotion/styled"

export const headerHeight = 100

export const StyledH2 = styled.h2`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    padding-bottom: 10px;

    color: #4f4f4f;
`

export const StyledH3 = styled.h3`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    padding-bottom: 10px;
    text-align: center;

    color: #4f4f4f;
`

export const StyledP = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: calc(9px + 0.8vw);
    line-height: calc(8px + 1.5vw);
    padding-bottom: 50px;
    text-align: center;

    color: #6a6a6a;
`

export const StyledP2 = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* or 122% */

    text-align: center;

    color: #828282;
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
