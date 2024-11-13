import { GrLocation } from "react-icons/gr"
import { GoHome } from "react-icons/go"
import { LuUser } from "react-icons/lu"

export const Footer = () => {
  return (
    <div className="w-[393px] h-[61px]">
      <ul className="flex h-full justify-center items-center gap-[53.43px]">
        <li>
          <GrLocation className="w-[24px] h-[30px] text-[#FFD501] font-bold" />
        </li>
        <li>
          <GoHome className="w-[28.57px] h-[28.57px] text-[#FFD501] font-bold" />
        </li>
        <li>
          <LuUser className="w-[25.39px] h-[28.57px] text-[#FFD501] font-bold" />
        </li>
      </ul>
    </div>
  )
}
