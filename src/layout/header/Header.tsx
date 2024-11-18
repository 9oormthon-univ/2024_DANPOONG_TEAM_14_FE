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
      <div className="w-[24.563rem] h-36 m-auto">
        <div className="flex bg-cir_white relative justify-center items-center pt-7">
          <div
            className="absolute left-9 top-[3.75rem] "
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
            <IoIosArrowBack className="text-cir_black_02 text-xl " />
          </div>
          {location.pathname === "/accept" && (
            <div>
              <span className="text-sm text-cir_black_02 font-bold">
                약관 동의
              </span>
            </div>
          )}
          {location.pathname.includes("/category") && (
            <div>
              <span className="text-sm text-cir_black_02 font-bold">
                {storeType}
              </span>
            </div>
          )}
          {location.pathname === "/circle-me/bookmark" && (
            <div>
              <span className="text-sm text-cir_black_02 font-bold">
                내 북마크 장소
              </span>
            </div>
          )}
          {location.pathname === "/types" && (
            <div className="flex absolute right-9 top-[3.75rem]">
              <div>
                <span className="text-sm font-bold text-cir_black_03">
                  Kakao
                </span>
              </div>
              <div className="w-6 h-6 bg-cir_black_03 rounded-lg flex items-center justify-center ml-2">
                <div>
                  <FaUser className="text-cir_white" />
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
      <div className="w-[24.563rem] h-36 flex flex-col items-center m-auto">
        <div className="w-[21.25rem] h-14  relative mt-10 flex mb-4">
          <div className="absolute top-1/2  left-4 transform -translate-y-1/2 flex justify-center items-center">
            <IoIosArrowBack className="text-cir_black_02 text-xl" />
          </div>
          <div className="w-full h-full">
            <input
              type="text"
              className="border- cir_black_03 border-solid border-[0.094rem] w-full h-full pl-10 placeholder-cir_black_01 placeholder-bold rounded-lg text-sm"
              placeholder="가게명/동네를 입력하세요"
            />
          </div>
          <div className="absolute top-1/2  right-5 transform -translate-y-1/2">
            <span className="text-cir_black_03">X</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-5">
            <FaBars className="text-cir_black_02 w-[1.125rem]" />
          </div>
          <ul className="flex gap-1">
            <li>
              <div className="w-[4.5rem] h-[1.688rem] rounded-lg bg-cir_yellow_01 flex justify-center">
                <select
                  name="category"
                  id="category"
                  className="bg-cir_yellow_01 w-full h-full rounded-lg text-[0.625rem] text-cir_white text-center"
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
      <div className="w-[21.25rem] flex gap-28 justify-center mt-7 m-auto">
        <div className="flex flex-col gap-1 items-center">
          <div>
            <FaBars className="text-cir_black_02 w-[1.125rem]" />
          </div>
          <div>
            <IoIosArrowBack
              className="text-cir_black_02 text-xl"
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
          <span className="text-cir_black_02 text-sm font-bold">
            {headerTitle}
          </span>
        </div>
        {location.pathname === "/circle-me/profile/edit" ? (
          <div
            onClick={() => {
              navigate("./circle-me/profile")
            }}
          >
            <span className="text-base text-cir_black_02 font-bold leading-5">
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
              <CiSettings className="text-cir_black_03 w-[1.375rem] h-[1.375rem]" />
            </div>
            <div>
              <span className="text-cir_black_03 text-xs font-bold">수정</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (location.pathname.includes("/surroundings")) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="mb-6 mt-7">
          <span className="text-sm text-cir_black_02 font-bold">
            {location.pathname.includes("type") ? "유형 탐색" : "주변 탐색"}
          </span>
        </div>
        {location.pathname.includes("/type") ? null : (
          <div className="w-[21.25rem] h-14 relative flex mb-4">
            <div className="absolute top-1/2  left-4 transform -translate-y-1/2 flex justify-center items-center">
              <IoIosArrowBack className="text-cir_black_02 text-xl" />
            </div>
            <div className="w-full h-full">
              <input
                type="text"
                className="border-cir_black_03 border-solid border-[0.094rem] w-full h-full pl-10 placeholder-cir_black_01 placeholder-bold rounded-lg text-sm"
                placeholder="동네를 입력하세요"
              />
            </div>
            <div className="absolute top-1/2  right-5 transform -translate-y-1/2">
              <span className="text-cir_black_03">X</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  return null
}
