import { ActionButtons } from "../../components/ActionButtons"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo.svg"

export const StartPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center">
      <div className="w-[105.82px] h-[150px] mt-[196px] mb-[41px]">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div className="text-[38px] font-bold mb-[20px]">
        <span>동그라</span>
        <span className="text-[#FFD332]">ME</span>
      </div>
      <div className="flex flex-col items-center text-[16px] leading-[20px] font-medium">
        <span>가입해 주셔서 감사합니다.</span>
        <span>즐거운 여행을 도와드릴게요!</span>
      </div>
      <div className="mt-[198px]">
        <ActionButtons
          onClick={() => {
            navigate("/circle-me")
          }}
          disabled={false}
        >
          시작하기
        </ActionButtons>
      </div>
    </div>
  )
}
