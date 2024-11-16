import { Outlet, useLocation } from "react-router-dom"

import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"

export const Layout = () => {
  const location = useLocation()

  return (
    <div className="relative">
      <div className="text-black_01 w-[390px]">
        <div
          className={`fixed top-0 left-0 z-10 w-full ${
            location.pathname.includes("/types") ||
            location.pathname.includes("/category")
              ? ""
              : "bg-[#ffffff]"
          }`}
        >
          <Header />
        </div>
        <div className="mx-auto min-h-screen">
          <Outlet />
        </div>
        {location.pathname !== "/accept" && location.pathname !== "/types" && (
          <div className="fixed bottom-0 left-0 bg-[#ffffff] w-full z-10">
            <Footer />
          </div>
        )}
      </div>
    </div>
  )
}
