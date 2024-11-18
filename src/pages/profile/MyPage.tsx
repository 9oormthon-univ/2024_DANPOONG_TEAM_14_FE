import { useNavigate } from "react-router-dom"
import { ActionButtons } from "../../components/ActionButtons"
import { MyCollection } from "../../components/MyCollection"

export const MyPage = () => {
  const navigate = useNavigate()

  return (
    <div>
<<<<<<< HEAD
      <div className="mt-[85px]">
        <div className="flex items-center mb-[20px] ml-[37px]">
          <div className="w-[69px] h-[69px] rounded-[100%] bg-[#D9D9D9]"></div>
          <div className="ml-[22px]">
            <div>
              <span className="text-[18px] font-bold leading-[26px]">
                사용자 이름
              </span>
            </div>
            <div>
              <span className="text-[14px] text-[#FFD332] font-bold">
=======
      <div className="mt-20">
        <div className="flex items-center mb-5 ml-9">
          <div className="w-[4.5rem] h-[4.5rem] rounded-[100%] bg-cir_black_03"></div>
          <div className="ml-[1.375rem]">
            <div>
              <span className="text-lg font-bold leading-6">사용자 이름</span>
            </div>
            <div>
              <span className="text-sm text-cir_yellow_01 font-bold">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
                장애인
              </span>
            </div>
          </div>
        </div>
        <div>
<<<<<<< HEAD
          <ul className="flex gap-[33px] justify-center">
            <li className="flex flex-col justify-center items-center text-[12px] leading-[16px] font-medium">
              <span>작성리뷰</span>
              <span>3</span>
            </li>
            <li className="flex flex-col justify-center items-center text-[12px] leading-[16px] font-medium">
=======
          <ul className="flex gap-8 justify-center">
            <li className="flex flex-col justify-center items-center text-xs leading-4 font-medium">
              <span>작성리뷰</span>
              <span>3</span>
            </li>
            <li className="flex flex-col justify-center items-center text-xs leading-4 font-medium">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
              <span>즐겨찾기</span>
              <span>13</span>
            </li>
          </ul>
        </div>
<<<<<<< HEAD
        <div className="mt-[15px] mb-[32px] text-center">
=======
        <div className="mt-4 mb-8 text-center">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          <ActionButtons
            onClick={() => {
              navigate("/login")
            }}
            disabled={false}
          >
            로그아웃
          </ActionButtons>
        </div>
        <div className="flex flex-col items-center">
<<<<<<< HEAD
          <div className="mb-[41px]">
=======
          <div className="mb-10">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            <MyCollection
              collection={"리뷰"}
              onClick={() => {
                navigate("/circle-me/review")
              }}
            />
          </div>
          <div>
            <MyCollection
              collection={"북마크"}
              onClick={() => {
                navigate("/circle-me/bookmark")
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
