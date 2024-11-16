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
      <div className="w-[393px] h-[61px] m-auto">
        <ul className="flex h-full justify-center items-center gap-[53.43px]">
          <li
            onClick={() => {
              navigate("/circle-me/bookmark")
            }}
          >
            <GrLocation className="w-[24px] h-[30px] text-[#FFD501] font-bold pointer-cursor" />
          </li>
          <li
            onClick={() => {
              navigate("/circle-me/explore/surroundings")
            }}
          >
            <GoHome className="w-[28.57px] h-[28.57px] text-[#FFD501] font-bold pointer-cursor" />
          </li>
          <li
            onClick={() => {
              navigate("/circle-me/profile")
            }}
          >
            <LuUser className="w-[25.39px] h-[28.57px] text-[#FFD501] font-bold pointer-cursor" />
          </li>
        </ul>
      </div>
    )
  } else if (location.pathname.includes("/bookmark")) {
    return (
      <div className="w-[393px] h-[61px] m-auto text-center mb-[58px]">
        <ActionButtons onClick={() => {}} disabled={false}>
          선택 삭제하기
        </ActionButtons>
      </div>
    )
  }

  return null
}
