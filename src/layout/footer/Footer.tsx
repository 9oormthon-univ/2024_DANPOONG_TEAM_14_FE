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
      <div className="w-[24.563rem h-[3.75rem] m-auto">
        <ul className="flex h-full justify-center items-center gap-[3.339rem]">
          <li
            onClick={() => {
              navigate("/circle-me/bookmark")
            }}
          >
            <GrLocation className="w-6 h-[1.875rem] text-cir_yellow_01 font-bold" />
          </li>
          <li
            onClick={() => {
              navigate("/circle-me/explore/surroundings")
            }}
          >
            <GoHome className="w-7 h-7 text-cir_yellow_01 font-bold " />
          </li>
          <li
            onClick={() => {
              navigate("/circle-me/profile")
            }}
          >
            <LuUser className="w-6 h-7 text-cir_yellow_01 font-bold" />
          </li>
        </ul>
      </div>
    )
  } else if (location.pathname.includes("/bookmark")) {
    return (
      <div className="w-[24.563rem] h-[3.75rem] m-auto text-center mb-14">
        <ActionButtons onClick={() => {}} disabled={false}>
          선택 삭제하기
        </ActionButtons>
      </div>
    )
  }

  return null
}
