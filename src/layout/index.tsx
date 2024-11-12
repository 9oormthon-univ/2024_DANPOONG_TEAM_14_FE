import { Outlet, useLocation } from "react-router-dom"

import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"

export const Layout = () => {
  const location = useLocation()

  return (
    <div>
      <div className="text-black_01">
        <div className="fixed top-0 left-0 z-10 w-full bg-black_03">
          <Header />
        </div>
        <div className="mx-auto min-h-screen">
          <Outlet />
        </div>
        {location.pathname !== "/accept" && location.pathname !== "/types" && (
          <div className="bg-black_03">
            <Footer />
          </div>
        )}
      </div>
    </div>
  )
}
