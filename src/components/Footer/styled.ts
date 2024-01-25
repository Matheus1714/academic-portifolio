import styled from "styled-components";

export const Container = styled.footer`
    padding: 1rem;
    margin-top: auto;
    text-align: center;
`

export const SocialLinks = styled.div`
    margin-top: 1rem;

    a {
        all: unset;
        cursor: pointer;

        margin-left: 0.75rem;
        &:nth-child(1){
            margin-left: 0;
        }
    }
`