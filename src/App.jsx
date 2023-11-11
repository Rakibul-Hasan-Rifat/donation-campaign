import { RouterProvider } from "react-router-dom";
import customRouter from './routes/customRoutes';

function App() {

    return (
        <RouterProvider router={customRouter} />
    )
}

export default App
