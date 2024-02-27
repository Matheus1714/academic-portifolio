import { Container } from "./styled";

interface CursorAnimationProps{
    firstText: string;
    secondText: string
}

export function CursorAnimation({ firstText, secondText }: CursorAnimationProps){
    return (
        <Container>
            <h1>
                {firstText} <span>{secondText}</span>
            </h1>
        </Container>
    )
}