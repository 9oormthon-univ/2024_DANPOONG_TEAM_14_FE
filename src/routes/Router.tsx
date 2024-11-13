import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout"
import { LoginPage } from "../pages/login/LoginPage"
import { AcceptPage } from "../pages/accept/AcceptPage"
import { TypeSelectPage } from "../pages/type/TypeSelectPage"
import { StartPage } from "../pages/done/StartPage"
import { MainPage } from "../pages/main/MainPage"
import { MyPage } from "../pages/profile/MyPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/accept",
        element: <AcceptPage />,
      },
      {
        path: "/types",
        element: <TypeSelectPage />,
      },
      {
        path: "/done",
        element: <StartPage />,
      },
      {
        path: "/circle-me",
        element: <MainPage />,
      },
      {
        path: "/circle-me/profile",
        element: <MyPage />,
      },
    ],
  },
])
