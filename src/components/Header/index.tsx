import { NavLink } from "react-router-dom";
import { Container, HeaderLinks, PortalLogo } from "./styled";

export function Header(){

    return (
        <Container>
            <NavLink to="/" title="Home">
                <PortalLogo>
                    <h1>MOTA, M. S. M</h1>
                    <p>Academic Portal</p>
                </PortalLogo>
            </NavLink>
            <HeaderLinks>
                <NavLink to="/" title="Home">Home</NavLink>
                <NavLink to="/about" title="About">About</NavLink>
                <NavLink to="/publications" title="Publications">Publications</NavLink>
                <NavLink to="/presentations" title="Presentations">Presentations</NavLink>
                <NavLink to="/projects" title="Projects">Projects</NavLink>
            </HeaderLinks>
        </Container>
    )
}