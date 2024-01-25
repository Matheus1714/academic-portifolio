import { Routes, Route } from "react-router-dom";

import { Layout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    )
}