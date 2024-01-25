import { Routes, Route } from "react-router-dom";

import { Layout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    )
}