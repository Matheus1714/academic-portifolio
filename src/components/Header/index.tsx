import { NavLink } from "react-router-dom";
import { Container, HeaderBar, HeaderLinks, PortalLogo, HeaderBarLinks, BarButton } from "./styled";
import { useState } from "react";

import BarIcon from '../../assets/bars.svg';
import CloseIcon from '../../assets/close.svg'

export function Header(){

    const routes = [
        {route: "/", title: "Home"},
        {route: "/about", title: "About"},
        {route: "/publications", title: "Publications"},
        {route: "/presentations", title: "Presentations"},
        {route: "/projects", title: "Projects"},
    ]

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const renderLinks = () => {
        return routes.map((route) => 
            <NavLink 
                to={route.route} 
                key={route.title}
                title={route.title}
            >
                {route.title}
            </NavLink>
        )
    }

    return (
        <Container>
            <NavLink to="/" title="Home">
                <PortalLogo>
                    <h1>MOTA, M. S. M</h1>
                    <p>Academic Portal</p>
                </PortalLogo>
            </NavLink>

            <HeaderLinks>
                {renderLinks()}
            </HeaderLinks>

            <HeaderBar>
                <BarButton onClick={handleClick}>
                    <img 
                        src={click ? CloseIcon : BarIcon}
                        alt=""
                    />
                </BarButton>
                {click ? <HeaderBarLinks>{renderLinks()}</HeaderBarLinks> : ""}
            </HeaderBar>
        </Container>
    )
}