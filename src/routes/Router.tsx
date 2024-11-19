import { Layout } from "../layout"
import { LoginPage } from "../pages/login/LoginPage"
import { AcceptPage } from "../pages/accept/AcceptPage"
import { TypeSelectPage } from "../pages/type/TypeSelectPage"
import { StartPage } from "../pages/done/StartPage"
import { MainPage } from "../pages/main/MainPage"
import { MyPage } from "../pages/profile/MyPage"
import { ProfileEditPage } from "../pages/edit/ProfileEditPage"
import { ExploreSurroundings } from "../pages/explore/ExploreSurroundings"
import { ExploreType } from "../pages/exploreType/ExploreType"
import { ExploreTheme } from "../pages/exploreTheme/ExploreTheme"
import { CategoryPage } from "../pages/category/CategoryPage"
import { BookmarkPage } from "../pages/bookmark/BookmarkPage"
import { MyReviewPage } from "../pages/myReview/MyReviewPage"

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "accept", element: <AcceptPage /> },
      { path: "types", element: <TypeSelectPage /> },
      { path: "done", element: <StartPage /> },
      { path: "circle-me", element: <MainPage /> },
      { path: "circle-me/profile", element: <MyPage /> },
      { path: "circle-me/profile/edit", element: <ProfileEditPage /> },
      { path: "circle-me/profile/edit/types", element: <TypeSelectPage /> },
      {
        path: "circle-me/explore/surroundings",
        element: <ExploreSurroundings />,
      },
      {
        path: "circle-me/explore/surroundings/theme",
        element: <ExploreTheme />,
      },
      { path: "circle-me/explore/surroundings/type", element: <ExploreType /> },
      { path: "circle-me/category/:theme", element: <CategoryPage /> },
      { path: "circle-me/bookmark", element: <BookmarkPage /> },
      { path: "circle-me/review", element: <MyReviewPage /> },
    ],
  },
]
