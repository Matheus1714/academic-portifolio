import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    padding: 0 5rem;

    @media screen and (max-width: 500px){
        padding: 0 1rem;
    }
`;
