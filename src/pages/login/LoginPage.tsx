import { ImBubble } from "react-icons/im"
import logo from "../../assets/images/logo.svg"

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[176px] mb-[12px]">
        <span className="text-[18px] font-medium">
          이동약자를 위한 지도 서비스
        </span>
      </div>
      <div className="text-[40px] font-bold">
        <span>동그라</span>
        <span className="text-[#FFD332]">ME</span>
      </div>
      <div className="w-[141.09px] h-[200px] mt-[111px] mb-[112px] flex justify-center">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div className="w-[300px] h-[55px] bg-[#FFD332] relative flex justify-center items-center rounded-[10px] cursor-pointer">
        <div className="absolute left-[71px] top-[18px] w-[20px] h-[20px]">
          <ImBubble />
        </div>
        <div>
          <span className="text-[14px] text-[#FFFFFF] ml-[11px] font-bold">
            카카오톡으로 로그인
          </span>
        </div>
      </div>
    </div>
  )
}
