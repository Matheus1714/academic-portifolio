import styled from 'styled-components';

export const CardRootContainer = styled.div`
    width: 25rem;
    min-height: 15rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    border: 1px solid ${(props) => props.theme.blue};
    box-shadow: 0 0 0.5px ${(props) => props.theme.blue},
                0 0 1px ${(props) => props.theme.blue},
                0 0 1.5px ${(props) => props.theme.blue};
    border-radius: 4px;


    @media screen and (max-width: 500px){
        width: 100%;
    }
`;

export const CardTitleContainer = styled.h1`
    color: ${(props) => props.theme.blue};
    font-size: 1.5rem;
`;

export const CardSubtileContainer = styled.h2`
    color: ${(props) => props.theme.white};
    font-size: 1.25rem;
`;

export const CardContentContainer = styled.p`
    padding: 0.5rem 0;
`;

export const CardImageContainer = styled.img`
    margin-bottom: 1rem;
    width: 100%;
    height: 20rem;
    object-fit: cover;
`;

export const CardButtonContainer = styled.a`
    text-decoration: none;
    display: block;
    width: 100%;
    border-radius: 4px;
    padding: 0.5rem 1rem;

    margin-top: auto;

    font-size: 1rem;
    font-weight: 700;

    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:hover{
        background: ${(props) => props.theme.blueHover};
        scale: 1.05;
    }
    &:active{
        background: ${(props) => props.theme.blueActivate};
    }
`;
