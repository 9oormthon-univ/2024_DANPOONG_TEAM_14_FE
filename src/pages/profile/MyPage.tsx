import { useNavigate } from "react-router-dom"
import { ActionButtons } from "../../components/ActionButtons"

export const MyPage = () => {
  const navigate = useNavigate()

  return (
    <div>
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
                장애인
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-[33px] justify-center">
            <li className="flex flex-col justify-center items-center text-[12px] leading-[16px] font-medium">
              <span>작성리뷰</span>
              <span>3</span>
            </li>
            <li className="flex flex-col justify-center items-center text-[12px] leading-[16px] font-medium">
              <span>즐겨찾기</span>
              <span>13</span>
            </li>
          </ul>
        </div>
        <div className="mt-[15px] text-center">
          <ActionButtons
            onClick={() => {
              navigate("/login")
            }}
            disabled={false}
          >
            로그아웃
          </ActionButtons>
        </div>
      </div>
    </div>
  )
}
