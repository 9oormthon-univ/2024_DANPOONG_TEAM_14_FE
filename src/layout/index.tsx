import { Outlet, useLocation } from "react-router-dom"

import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"

export const Layout = () => {
  const location = useLocation()

  return (
    <div className="relative">
<<<<<<< HEAD
      <div className="text-black_01 w-[390px]">
=======
      <div className="text-cir_black_01 w-[24.375rem]">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        <div
          className={`fixed top-0 left-0 z-10 w-full ${
            location.pathname.includes("/types") ||
            location.pathname.includes("/category") ||
            location.pathname.includes("/bookmark")
              ? ""
<<<<<<< HEAD
              : "bg-[#ffffff]"
=======
              : "bg-cir_white"
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          }`}
        >
          <Header />
        </div>
        <div className="mx-auto min-h-screen">
          <Outlet />
        </div>
        {location.pathname !== "/accept" && location.pathname !== "/types" && (
<<<<<<< HEAD
          <div className="fixed bottom-0 left-0 bg-[#ffffff] w-full z-10">
=======
          <div className="fixed bottom-0 left-0 bg-cir_white w-full z-10">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            <Footer />
          </div>
        )}
      </div>
    </div>
  )
}
