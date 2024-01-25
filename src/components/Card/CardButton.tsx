import { CardButtonContainer } from "./styled";

interface CardButtonProps {
    title: string
    url: string
}

export function CardButton({ title, url }: CardButtonProps) {
    return (
        <CardButtonContainer href={url} target="_blanck">
            {title}
        </CardButtonContainer>
    )
}
