import { createBrowserRouter } from "react-router-dom";

import Soal4 from "../views/Soal4.jsx";
import Soal5 from "../views/Soal5.jsx";

export default createBrowserRouter([
    {
        path: "/",
        element: < Soal4 />
    },
    {
        path: "/soal5",
        element: < Soal5 />
    }
]);
