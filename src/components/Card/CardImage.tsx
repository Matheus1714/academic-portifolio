import { CardImageContainer } from "./styled";

interface CardImageProps {
    url: string
    description: string
}

export function CardImage({ url, description }: CardImageProps) {
    return (
        <CardImageContainer src={url} alt={description} />
    )
}
