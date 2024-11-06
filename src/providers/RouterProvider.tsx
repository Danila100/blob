import React from "react";
import {BrowserRouter} from "react-router-dom";

const PUBLIC_URL = process.env.PUBLIC_URL || "/";

function RouterProvider({children}: React.PropsWithChildren) {
    return <BrowserRouter basename={PUBLIC_URL}>{children}</BrowserRouter>;
}

export {RouterProvider};
