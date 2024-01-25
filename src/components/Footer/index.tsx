import { Container, SocialLinks } from "./styled";
import GithubIcon from "../../assets/github.svg"
import LattesIcon from "../../assets/lattes.svg"
import LinkedinIcon from "../../assets/linkedin.svg"

export function Footer(){
    return (
        <Container>
            <p>@2024 Academic Portal for Personal Management</p>
            <SocialLinks>
                <a target="_blank" href="http://lattes.cnpq.br/4944089934682851">
                    <img src={LattesIcon} alt="" />
                </a>
                <a target="_blank" href="https://github.com/Matheus1714">
                    <img src={GithubIcon} alt="" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/matheus-mota-44b21a17b/">
                    <img src={LinkedinIcon} alt="" />
                </a>
            </SocialLinks>
        </Container>
    )
}