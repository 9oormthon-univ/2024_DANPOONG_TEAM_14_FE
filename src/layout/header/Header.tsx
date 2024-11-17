import { useLocation, useNavigate } from "react-router-dom"

import { IoIosArrowBack } from "react-icons/io"
import { FaUser } from "react-icons/fa6"
import { FaBars } from "react-icons/fa6"
import { CiSettings } from "react-icons/ci"

import { CategoryItem } from "../../components/CategoryItem"
import { useStoreType } from "../../hooks/useStoreType"
import { useGetHeaderTitle } from "../../hooks/useGetHeaderTitle"

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const storeType = useStoreType()
  const headerTitle = useGetHeaderTitle()

  if (
    location.pathname === "/accept" ||
    location.pathname.includes("/types") ||
    location.pathname.includes("/category") ||
    location.pathname === "/circle-me/bookmark"
  ) {
    return (
      <div className="w-[393px] h-[150px] m-auto">
        <div className="flex bg-[#FFFFFF] relative justify-center items-center pt-[29px]">
          <div
            className="absolute left-[35px] top-[59px]"
            onClick={() => {
              if (location.pathname === "/types") {
                navigate("/accept")
              } else if (location.pathname === "/accept") {
                navigate("/login")
              } else if (
                location.pathname === "/circle-me/profile/edit/types"
              ) {
                navigate("/circle-me/profile/edit")
              }
            }}
          >
            <IoIosArrowBack className="text-[#989898] text-[20px]" />
          </div>
          {location.pathname === "/accept" && (
            <div>
              <span className="text-[14px] text-[#B3B3B3] font-bold">
                약관 동의
              </span>
            </div>
          )}
          {location.pathname.includes("/category") && (
            <div>
              <span className="text-[14px] text-[#B3B3B3] font-bold">
                {storeType}
              </span>
            </div>
          )}
          {location.pathname === "/circle-me/bookmark" && (
            <div>
              <span className="text-[14px] text-[#B3B3B3] font-bold">
                내 북마크 장소
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
      </div>
    )
  }
  if (location.pathname === "/circle-me") {
    return (
      <div className="w-[393px] h-[150px] flex flex-col items-center m-auto">
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
        <div className="flex items-center">
          <div className="mr-[20px]">
            <FaBars className="text-[#989898] w-[18px]" />
          </div>
          <ul className="flex gap-[4px]">
            <li>
              <div className="w-[72px] h-[27px] rounded-[8px] bg-[#FFD332] flex justify-center">
                <select
                  name="category"
                  id="category"
                  className="bg-[#FFD332] w-full h-full rounded-[8px] text-[10px] text-[#ffffff] text-center"
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

  if (
    location.pathname.includes("/circle-me/profile") ||
    location.pathname.includes("/review")
  ) {
    return (
      <div className="w-[340px] flex gap-[111px] justify-center mt-[29px] m-auto">
        <div className="flex flex-col gap-[12px] items-center">
          <div>
            <FaBars className="text-[#989898] w-[18px]" />
          </div>
          <div>
            <IoIosArrowBack
              className="text-[#989898] text-[20px]"
              onClick={() => {
                if (location.pathname.includes("/edit")) {
                  navigate("/circle-me/profile")
                } else {
                  navigate("/circle-me")
                }
              }}
            />
          </div>
        </div>
        <div>
          <span className="text-[#B3B3B3] text-[14px] font-bold">
            {headerTitle}
          </span>
        </div>
        {location.pathname === "/circle-me/profile/edit" ? (
          <div
            onClick={() => {
              navigate("./circle-me/profile")
            }}
          >
            <span className="text-[16px] text-[#989898] font-bold leading-[20px]">
              저장
            </span>
          </div>
        ) : location.pathname.includes("/review") ? (
          <div></div>
        ) : (
          <div
            className="flex flex-col justify-center"
            onClick={() => {
              navigate("/circle-me/profile/edit")
            }}
          >
            <div>
              <CiSettings className="text-[#CDCDCD] w-[22px] h-[22px]" />
            </div>
            <div>
              <span className="text-[#CDCDCD] text-[12px] font-bold">수정</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (location.pathname.includes("/surroundings")) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[26px] mt-[29px]">
          <span className="text-[14px] text-[#B3B3B3] font-bold">
            {location.pathname.includes("type") ? "유형 탐색" : "주변 탐색"}
          </span>
        </div>
        {location.pathname.includes("/type") ? null : (
          <div className="w-[340px] h-[55px] relative flex mb-[15px]">
            <div className="absolute top-[50%] left-[15px] transform -translate-y-1/2 flex justify-center items-center">
              <IoIosArrowBack className="text-[#989898] text-[20px]" />
            </div>
            <div className="w-full h-full">
              <input
                type="text"
                className="border-[#CDCDCD] border-solid border-[1.5px] w-full h-full pl-[38px] placeholder-[#000000] placeholder-bold rounded-[10px] text-[14px]"
                placeholder="동네를 입력하세요"
              />
            </div>
            <div className="absolute top-[50%] right-[19px] transform -translate-y-1/2">
              <span className="text-[#CDCDCD]">X</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  return null
}
