import { Container } from "./styled"
import { Outlet } from "react-router-dom"

export function Layout(){
    return (
        <Container>
            <Outlet />
        </Container>
    )
}