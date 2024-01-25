import { Route, Routes } from "react-router-dom";

import { Layout } from "./layouts/DefaultLayout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Publications } from "./pages/Publications";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    )
}