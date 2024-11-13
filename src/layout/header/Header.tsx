import { IoIosArrowBack } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"
import { FaUser } from "react-icons/fa6"

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="flex bg-[#FFFFFF] relative justify-center items-center pt-[29px]">
      <div
        className="absolute left-[35px] top-[59px]"
        onClick={() => {
          if (location.pathname === "/types") {
            navigate("/accept")
          } else if (location.pathname === "/accept") {
            navigate("/login")
          }
        }}
      >
        <IoIosArrowBack className="text-[#989898] text-[26px]" />
      </div>
      {location.pathname === "/accept" && (
        <div>
          <span className="text-[14px] text-[#B3B3B3] font-bold">
            약관 동의
          </span>
        </div>
      )}
      {location.pathname === "/types" && (
        <div className="flex absolute right-[38px] top-[59px]">
          <div>
            <span className="text-[14px] font-bold text-[#CDCDCD]">Kakao</span>
          </div>
          <div className="w-[24px] h-[24px] bg-[#CDCDCD] rounded-[10px] flex items-center justify-center ml-[9px]">
            <div>
              <FaUser className="text-[#ffffff]" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
