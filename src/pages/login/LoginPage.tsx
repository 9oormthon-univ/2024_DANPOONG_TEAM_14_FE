import { ImBubble } from "react-icons/im"
import logo from "../../assets/images/logo.svg"

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
<<<<<<< HEAD
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
=======
      <div className="mt-44 mb-3">
        <span className="text-lg font-medium">이동약자를 위한 지도 서비스</span>
      </div>
      <div className="text-[2.5rem] font-bold">
        <span>동그라</span>
        <span className="text-cir_yellow_01">ME</span>
      </div>
      <div className="w-[8.818rem] h-[12.5rem] mt-[7rem] mb-[7rem] flex justify-center">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div className="w-[18.75rem] h-14 bg-cir_yellow_01 relative flex justify-center items-center rounded-lg  ">
        <div className="absolute left-[4.5rem] top-4 w-5 h-5">
          <ImBubble />
        </div>
        <div>
          <span className="text-sm text-cir_white ml-3 font-bold">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            카카오톡으로 로그인
          </span>
        </div>
      </div>
    </div>
  )
}
