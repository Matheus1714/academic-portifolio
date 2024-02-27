import { Container } from "./styled";

interface PhraseProps {
    text: string;
    author: string;
}

export function Phrase({ text, author }: PhraseProps) {
    return (
        <Container>
            <h2>{text}</h2>
            <h2>{author}</h2>
        </Container>
    )
}