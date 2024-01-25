import { Outlet } from "react-router-dom"
import { Container } from "./styled"

export function Layout(){
    return (
        <Container>
            <Outlet />
        </Container>
    )
}