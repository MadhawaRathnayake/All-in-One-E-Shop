import CMS from "./pages/cms/CMS";
import ErrorPage from "./pages/Error/Error";
import Home from "./pages/Home"

const customRouter = [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/cms",
        element: <CMS />
      },   
]

export default customRouter;