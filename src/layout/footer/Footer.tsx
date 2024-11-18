import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { GrLocation } from "react-icons/gr"
import { GoHome } from "react-icons/go"
import { LuUser } from "react-icons/lu"

import { ActionButtons } from "../../components/ActionButtons"

export const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  if (
    location.pathname === "/circle-me" ||
    location.pathname.includes("/surroundings") ||
    location.pathname.includes("/category")
  ) {
    return (
<<<<<<< HEAD
      <div className="w-[393px] h-[61px] m-auto">
        <ul className="flex h-full justify-center items-center gap-[53.43px]">
=======
      <div className="w-[24.563rem h-[3.75rem] m-auto">
        <ul className="flex h-full justify-center items-center gap-[3.339rem]">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          <li
            onClick={() => {
              navigate("/circle-me/bookmark")
            }}
          >
<<<<<<< HEAD
            <GrLocation className="w-[24px] h-[30px] text-[#FFD501] font-bold pointer-cursor" />
=======
            <GrLocation className="w-6 h-[1.875rem] text-cir_yellow_01 font-bold" />
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          </li>
          <li
            onClick={() => {
              navigate("/circle-me/explore/surroundings")
            }}
          >
<<<<<<< HEAD
            <GoHome className="w-[28.57px] h-[28.57px] text-[#FFD501] font-bold pointer-cursor" />
=======
            <GoHome className="w-7 h-7 text-cir_yellow_01 font-bold " />
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          </li>
          <li
            onClick={() => {
              navigate("/circle-me/profile")
            }}
          >
<<<<<<< HEAD
            <LuUser className="w-[25.39px] h-[28.57px] text-[#FFD501] font-bold pointer-cursor" />
=======
            <LuUser className="w-6 h-7 text-cir_yellow_01 font-bold" />
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          </li>
        </ul>
      </div>
    )
  } else if (location.pathname.includes("/bookmark")) {
    return (
<<<<<<< HEAD
      <div className="w-[393px] h-[61px] m-auto text-center mb-[58px]">
=======
      <div className="w-[24.563rem] h-[3.75rem] m-auto text-center mb-14">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        <ActionButtons onClick={() => {}} disabled={false}>
          선택 삭제하기
        </ActionButtons>
      </div>
    )
  }

  return null
}
