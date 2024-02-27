import styled from 'styled-components';

export const Container = styled.div`
    h2{
        font-size: 2rem;
        font-style: italic;

        &:nth-child(2){
            color: ${(props) => props.theme.blue};
        }
    }
`;
