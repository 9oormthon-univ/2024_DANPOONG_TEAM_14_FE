import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
<<<<<<< HEAD

import "./index.css"
import { RouterProvider } from "react-router-dom"

import { router } from "./routes/Router"
=======
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes/Router"
import "./index.css"

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
