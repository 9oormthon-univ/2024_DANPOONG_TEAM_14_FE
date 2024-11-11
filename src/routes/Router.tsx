import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout"
import { LoginPage } from "../pages/login/LoginPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
    ],
  },
])
