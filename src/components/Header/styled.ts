import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;

    a{
        all: unset;
        cursor: pointer;
    }
`

export const PortalLogo = styled.div`
    h1{
        color: ${(props) => props.theme.blue};
        font-weight: 800;
        font-size: 1.25rem;
    }
    p{
        color: ${(props) => props.theme.white};
        font-weight: 800;
        font-size: 0.875rem;
    }
`

export const HeaderLinks = styled.div`
    display: flex;
    gap: 1rem;

    a{
        font-weight: 800;
        font-size: 1rem;
        border-bottom: 4px solid transparent;

        &:hover{
            color: ${(props) => props.theme.blue};
            
        }
    }

    .active{
        color: ${(props) => props.theme.blue};
        border-bottom: 4px solid ${(props) => props.theme.blue};
    }
`