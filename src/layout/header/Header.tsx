import { IoIosArrowBack } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="flex bg-[#FFFFFF] relative justify-center items-center pt-[15px]">
      <div
        className="absolute left-[14px] top-[15px]"
        onClick={() => {
          if (location.pathname === "/types") {
            navigate("/accept")
          } else if (location.pathname === "/accept") {
            navigate("/login")
          }
        }}
      >
        <IoIosArrowBack className="text-[#B3B3B3] text-[26px]" />
      </div>
      <div>
        {location.pathname === "/accept" && (
          <span className="text-[20px] font-bold">약관 동의</span>
        )}
      </div>
    </div>
  )
}
