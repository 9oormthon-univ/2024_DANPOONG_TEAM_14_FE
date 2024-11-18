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
<<<<<<< HEAD
      <div className="w-[393px] h-[150px] m-auto">
        <div className="flex bg-[#FFFFFF] relative justify-center items-center pt-[29px]">
          <div
            className="absolute left-[35px] top-[59px]"
=======
      <div className="w-[24.563rem] h-36 m-auto">
        <div className="flex bg-cir_white relative justify-center items-center pt-7">
          <div
            className="absolute left-9 top-[3.75rem] "
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
            <IoIosArrowBack className="text-[#989898] text-[20px]" />
          </div>
          {location.pathname === "/accept" && (
            <div>
              <span className="text-[14px] text-[#B3B3B3] font-bold">
=======
            <IoIosArrowBack className="text-cir_black_02 text-xl " />
          </div>
          {location.pathname === "/accept" && (
            <div>
              <span className="text-sm text-cir_black_02 font-bold">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
                약관 동의
              </span>
            </div>
          )}
          {location.pathname.includes("/category") && (
            <div>
<<<<<<< HEAD
              <span className="text-[14px] text-[#B3B3B3] font-bold">
=======
              <span className="text-sm text-cir_black_02 font-bold">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
                {storeType}
              </span>
            </div>
          )}
          {location.pathname === "/circle-me/bookmark" && (
            <div>
<<<<<<< HEAD
              <span className="text-[14px] text-[#B3B3B3] font-bold">
=======
              <span className="text-sm text-cir_black_02 font-bold">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
                내 북마크 장소
              </span>
            </div>
          )}
          {location.pathname === "/types" && (
<<<<<<< HEAD
            <div className="flex absolute right-[38px] top-[59px]">
              <div>
                <span className="text-[14px] font-bold text-[#CDCDCD]">
                  Kakao
                </span>
              </div>
              <div className="w-[24px] h-[24px] bg-[#CDCDCD] rounded-[10px] flex items-center justify-center ml-[9px]">
                <div>
                  <FaUser className="text-[#ffffff]" />
=======
            <div className="flex absolute right-9 top-[3.75rem]">
              <div>
                <span className="text-sm font-bold text-cir_black_03">
                  Kakao
                </span>
              </div>
              <div className="w-6 h-6 bg-cir_black_03 rounded-lg flex items-center justify-center ml-2">
                <div>
                  <FaUser className="text-cir_white" />
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
      <div className="w-[393px] h-[150px] flex flex-col items-center m-auto">
        <div className="w-[340px] h-[55px] relative mt-[41px] flex mb-[15px]">
          <div className="absolute top-[50%] left-[15px] transform -translate-y-1/2 flex justify-center items-center">
            <IoIosArrowBack className="text-[#989898] text-[20px]" />
=======
      <div className="w-[24.563rem] h-36 flex flex-col items-center m-auto">
        <div className="w-[21.25rem] h-14  relative mt-10 flex mb-4">
          <div className="absolute top-1/2  left-4 transform -translate-y-1/2 flex justify-center items-center">
            <IoIosArrowBack className="text-cir_black_02 text-xl" />
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          </div>
          <div className="w-full h-full">
            <input
              type="text"
<<<<<<< HEAD
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
=======
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
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
      <div className="w-[340px] flex gap-[111px] justify-center mt-[29px] m-auto">
        <div className="flex flex-col gap-[12px] items-center">
          <div>
            <FaBars className="text-[#989898] w-[18px]" />
          </div>
          <div>
            <IoIosArrowBack
              className="text-[#989898] text-[20px]"
=======
      <div className="w-[21.25rem] flex gap-28 justify-center mt-7 m-auto">
        <div className="flex flex-col gap-1 items-center">
          <div>
            <FaBars className="text-cir_black_02 w-[1.125rem]" />
          </div>
          <div>
            <IoIosArrowBack
              className="text-cir_black_02 text-xl"
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
          <span className="text-[#B3B3B3] text-[14px] font-bold">
=======
          <span className="text-cir_black_02 text-sm font-bold">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            {headerTitle}
          </span>
        </div>
        {location.pathname === "/circle-me/profile/edit" ? (
          <div
            onClick={() => {
              navigate("./circle-me/profile")
            }}
          >
<<<<<<< HEAD
            <span className="text-[16px] text-[#989898] font-bold leading-[20px]">
=======
            <span className="text-base text-cir_black_02 font-bold leading-5">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
              <CiSettings className="text-[#CDCDCD] w-[22px] h-[22px]" />
            </div>
            <div>
              <span className="text-[#CDCDCD] text-[12px] font-bold">수정</span>
=======
              <CiSettings className="text-cir_black_03 w-[1.375rem] h-[1.375rem]" />
            </div>
            <div>
              <span className="text-cir_black_03 text-xs font-bold">수정</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            </div>
          </div>
        )}
      </div>
    )
  }

  if (location.pathname.includes("/surroundings")) {
    return (
      <div className="flex flex-col justify-center items-center">
<<<<<<< HEAD
        <div className="mb-[26px] mt-[29px]">
          <span className="text-[14px] text-[#B3B3B3] font-bold">
=======
        <div className="mb-6 mt-7">
          <span className="text-sm text-cir_black_02 font-bold">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            {location.pathname.includes("type") ? "유형 탐색" : "주변 탐색"}
          </span>
        </div>
        {location.pathname.includes("/type") ? null : (
<<<<<<< HEAD
          <div className="w-[340px] h-[55px] relative flex mb-[15px]">
            <div className="absolute top-[50%] left-[15px] transform -translate-y-1/2 flex justify-center items-center">
              <IoIosArrowBack className="text-[#989898] text-[20px]" />
=======
          <div className="w-[21.25rem] h-14 relative flex mb-4">
            <div className="absolute top-1/2  left-4 transform -translate-y-1/2 flex justify-center items-center">
              <IoIosArrowBack className="text-cir_black_02 text-xl" />
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            </div>
            <div className="w-full h-full">
              <input
                type="text"
<<<<<<< HEAD
                className="border-[#CDCDCD] border-solid border-[1.5px] w-full h-full pl-[38px] placeholder-[#000000] placeholder-bold rounded-[10px] text-[14px]"
                placeholder="동네를 입력하세요"
              />
            </div>
            <div className="absolute top-[50%] right-[19px] transform -translate-y-1/2">
              <span className="text-[#CDCDCD]">X</span>
=======
                className="border-cir_black_03 border-solid border-[0.094rem] w-full h-full pl-10 placeholder-cir_black_01 placeholder-bold rounded-lg text-sm"
                placeholder="동네를 입력하세요"
              />
            </div>
            <div className="absolute top-1/2  right-5 transform -translate-y-1/2">
              <span className="text-cir_black_03">X</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            </div>
          </div>
        )}
      </div>
    )
  }

  return null
}
