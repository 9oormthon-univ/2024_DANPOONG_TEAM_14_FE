import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout"
import { LoginPage } from "../pages/login/LoginPage"
import { AcceptPage } from "../pages/accept/AcceptPage"
import { TypeSelectPage } from "../pages/type/TypeSelectPage"
import { StartPage } from "../pages/done/StartPage"
import { MainPage } from "../pages/main/MainPage"
import { MyPage } from "../pages/profile/MyPage"
import { ProfileEditPage } from "../pages/edit/ProfileEditPage"

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
      {
        path: "/circle-me/profile/edit",
        element: <ProfileEditPage />,
      },
      {
        path: "/circle-me/profile/edit/types",
        element: <TypeSelectPage />,
      },
    ],
  },
])
