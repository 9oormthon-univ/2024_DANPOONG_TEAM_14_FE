import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout"
import { LoginPage } from "../pages/login/LoginPage"
import { AcceptPage } from "../pages/accept/AcceptPage"
import { TypeSelectPage } from "../pages/type/TypeSelectPage"
import { StartPage } from "../pages/done/StartPage"
import { MainPage } from "../pages/main/MainPage"

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
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/accept",
    element: <Layout />,
    children: [
      {
        path: "/accept",
        element: <AcceptPage />,
      },
    ],
  },
  {
    path: "/types",
    element: <Layout />,
    children: [
      {
        path: "/types",
        element: <TypeSelectPage />,
      },
    ],
  },
  {
    path: "/done",
    element: <StartPage />,
  },
  {
    path: "/circle-me",
    element: <Layout />,
    children: [
      {
        path: "/circle-me",
        element: <MainPage />,
      },
    ],
  },
])
