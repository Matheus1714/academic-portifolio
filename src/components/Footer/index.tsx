import { social } from "../../data/social";
import { Container, SocialLinks } from "./styled";


export function Footer(){
    
    const date = new Date();
    const year = date.getFullYear()

    return (
        <Container>
            <p>@{year} Academic Portal for Personal Management</p>
            <SocialLinks>
                {social.map((media) =>(
                    <a target="_blank" href={media.url} key={media.url}>
                        <img src={media.iconPath} alt={media.alt} />
                    </a>
                ))}
            </SocialLinks>
        </Container>
    )
}