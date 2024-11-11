import { Outlet } from "react-router-dom"

import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"

export const Layout = () => {
  return (
    <div>
      <div className="text-black_01">
        <div className="stick top-0 z-10 bg-black_03">
          <Header />
        </div>
        <div className="mx-auto min-h-screen">
          <Outlet />
        </div>
      </div>
      <div className="bg-black_03">
        <Footer />
      </div>
    </div>
  )
}
