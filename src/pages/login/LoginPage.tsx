import { ImBubble } from "react-icons/im"

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[99px] h-[96px] bg-red-600 mt-[282px] mb-[12px]">
        logo
      </div>
      <div className="text-[12px] leading-[22px] text-[#FF8A9B] flex flex-col justify-center items-center">
        <span>이동약자를 위한 지도 서비스</span>
        <span>동그라me</span>
      </div>
      <div className="w-[295px] h-[36.4px] bg-[#FDDC3F] relative flex justify-center items-center mt-[221px] rounded-md cursor-pointer">
        <div className="absolute left-[10px]">
          <ImBubble />
        </div>
        <div>
          <span className="text-[13px]">카카오톡으로 로그인</span>
        </div>
      </div>
    </div>
  )
}
