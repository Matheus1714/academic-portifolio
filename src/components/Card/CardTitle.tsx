import { CardTitleContainer } from "./styled";

interface CardTitleProps {
    title: string;
}

export function CardTitle({ title }: CardTitleProps) {
    return (
        <CardTitleContainer>
            {title}
        </CardTitleContainer>
    )
}
