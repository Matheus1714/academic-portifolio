import styled, { keyframes } from "styled-components";

const cursor = keyframes`
    50% {
        border-color: transparent;
    }
`

const typing = keyframes`
    0% {width: 0}
`

export const Container = styled.div`
`

export const CursorAnimation = styled.div`
    --font-size: 6rem;

    display: inline-block;

    padding: 4rem 0;

    h1{
        font-size: var(--font-size);

        letter-spacing: 10px;
        border-right: 8px solid ${(props) => props.theme.blue};
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        animation:
            ${typing} 2s,
            ${cursor} .4s step-end infinite alternate;

        span{
            font-size: var(--font-size);
            color: ${(props) => props.theme.blue};
        }
    }
`

export const Phrase = styled.div`
    h2{
        font-size: 2rem;
        font-style: italic;

        &:nth-child(2){
            color: ${(props) => props.theme.blue};
        }
    }
`