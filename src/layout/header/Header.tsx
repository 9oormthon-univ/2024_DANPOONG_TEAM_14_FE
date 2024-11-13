import { IoIosArrowBack } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"
import { FaUser } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"
import { CategoryItem } from "../../components/CategoryItem"

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === "/accept" || location.pathname === "/types") {
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
              <span className="text-[14px] font-bold text-[#CDCDCD]">
                Kakao
              </span>
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
  if (location.pathname === "/circle-me") {
    return (
      <div className="w-[393px] h-[150px] flex flex-col items-center">
        <div className="w-[340px] h-[55px] relative mt-[41px] flex mb-[15px]">
          <div className="absolute top-[50%] left-[15px] transform -translate-y-1/2 flex justify-center items-center">
            <IoIosArrowBack className="text-[#989898] text-[20px]" />
          </div>
          <div className="w-full h-full">
            <input
              type="text"
              className="border-[#CDCDCD] border-solid border-[1.5px] w-full h-full pl-[38px] placeholder-[#000000] placeholder-bold rounded-[10px] text-[14px]"
              placeholder="가게명/동네를 입력하세요"
            />
          </div>
          <div className="absolute top-[50%] right-[19px] transform -translate-y-1/2">
            <span className="text-[#CDCDCD]">X</span>
          </div>
        </div>
        <div className="flex">
          <div className="mr-[20px]">
            <RxHamburgerMenu className="text-[#989898] text-[20px]" />
          </div>
          <ul className="flex gap-[4px]">
            <li>
              <div className="w-[72px] h-[27px] rounded-[8px] bg-[#FFD332] flex justify-center">
                <select
                  name="category"
                  id="category"
                  className="bg-[#FFD332] w-full h-full rounded-[8px] text-[10px] text-[#ffffff]"
                >
                  <option value="distance">거리순</option>
                  <option value="correct">정확도순</option>
                </select>
              </div>
            </li>
            <li>
              <CategoryItem>카페</CategoryItem>
            </li>
            <li>
              <CategoryItem>음식점</CategoryItem>
            </li>
            <li>
              <CategoryItem>편의시설</CategoryItem>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return <div>header</div>
}
