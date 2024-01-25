import { Card } from "../../components/Card";
import { PublicationProps, publications } from "../../data/publication";
import { Container } from "./styled";

export function Publications(){
    return (
        <Container>
            {publications.map((publication : PublicationProps) => (
                <Card.Root key={publication.doi}>
                    <Card.Title title={publication.publicationYear.toString()} />
                    <Card.Subtitle subtitle={publication.title} />
                    <Card.Content content={publication.abstract} />
                    <Card.Button title="Publication" url={publication.url}/>
                </Card.Root>
            ))}
        </Container>
    )
}