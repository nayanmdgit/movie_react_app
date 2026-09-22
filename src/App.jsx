import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path : "/About",
        Component: About
      },
      {
        path : "/Contact",
        Component: Contact
      },
      {
        path: "/Movies",
        Component: Movies,
    }

    ]
  },
  
]);


function Router() {


  return (
    <RouterProvider router={router} />
  )
}

export default Router
