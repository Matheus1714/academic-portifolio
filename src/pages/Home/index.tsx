import { Container, CursorAnimation, Phrase } from "./styled"

export function Home(){
    return (
        <Container>
            <CursorAnimation>
                <h1>Matheus <span>Mota</span></h1>
            </CursorAnimation>
            <Phrase>
                <h2>“Constant improvement is better than delayed perfection”</h2>
                <h2>Mark Tawain</h2>
            </Phrase>
        </Container>
    )
}