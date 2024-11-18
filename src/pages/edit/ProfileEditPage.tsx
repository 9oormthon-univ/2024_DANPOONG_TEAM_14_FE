import { useNavigate } from "react-router-dom"

import { FiCamera } from "react-icons/fi"

import { ActionButtons } from "../../components/ActionButtons"
import { InputItem } from "../../components/InputItem"
import { TypeSelectItem } from "../../components/TypeSelectItem"

export const ProfileEditPage = () => {
  const navigate = useNavigate()

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center mt-[85px]">
      <div className="mb-[4px]">
        <div className="relative">
          <div className="w-[75px] h-[75px] bg-[#D9D9D9] rounded-[50%]"></div>
          <div className="w-[37px] h-[37px] bg-[#ffffff] rounded-[50%] absolute bottom-[-4px] right-[-6px] z-10 flex justify-center items-center">
            <div className="w-[34px] h-[34px] bg-[#D9D9D9] rounded-[50%] flex justify-center items-center">
              <FiCamera className="w-[12px] h-[12px] text-[#ffffff]" />
=======
    <div className="flex flex-col items-center mt-20">
      <div className="mb-1">
        <div className="relative">
          <div className="w-[4.688rem] h-[4.688rem] bg-cir_black_03 rounded-[50%]"></div>
          <div className="w-[2.313rem] h-[2.313rem] bg-cir_white rounded-[50%] absolute bottom-[-0.25rem] right-[-0.375rem] z-10 flex justify-center items-center">
            <div className="w-[2.125rem] h-[2.125rem] bg-cir_black_03 rounded-[50%] flex justify-center items-center">
              <FiCamera className="w-3 h-3 text-cir_white" />
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="mb-[21px]">
        <div className="mb-[16px]">
          <span className="text-[16px] leading-[20px] font-bold">이름</span>
=======
      <div className="mb-5">
        <div className="mb-4">
          <span className="text-base leading-5 font-bold">이름</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        </div>
        <div>
          <InputItem
            type={"text"}
            width={333}
            height={55}
            placeholder={"사용자"}
          />
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex items-center gap-[51px]">
        <div>
          <div className="mb-[12px]">
            <span className="text-[16px] leading-[20px] font-bold">나이</span>
=======
      <div className="flex items-center gap-12">
        <div>
          <div className="mb-3">
            <span className="text-base leading-5 font-bold">나이</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          </div>
          <div className="flex items-center">
            <div>
              <InputItem
                type={"number"}
                width={127}
                height={45}
                placeholder={""}
              />
            </div>
<<<<<<< HEAD
            <div className="ml-[9px]">
              <span className="text-[14px] leading-[20px] font-medium">세</span>
=======
            <div className="ml-2">
              <span className="text-sm leading-5 font-medium">세</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            </div>
          </div>
        </div>
        <div>
<<<<<<< HEAD
          <div className="mb-[12px]">
            <span className="text-[16px] leading-[20px] font-bold">성별</span>
=======
          <div className="mb-3">
            <span className="text-base leading-5 font-bold">성별</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          </div>
          <div>
            <InputItem
              type={"select"}
              width={127}
              height={45}
              placeholder={""}
            />
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex flex-col items-center mb-[129px]">
        <div className="flex items-center gap-[191px] mb-[22px] mt-[51px]">
          <div>
            <span className="text-[16px] font-bold leading-[20px]">
              이동약자 유형
            </span>
=======
      <div className="flex flex-col items-center mb-32">
        <div className="flex items-center gap-[11.938rem] mb-5 mt-14">
          <div>
            <span className="text-base font-bold leading-5">이동약자 유형</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          </div>
          <div
            onClick={() => {
              navigate("/circle-me/profile/edit/types")
            }}
          >
<<<<<<< HEAD
            <span className="text-[#989898] text-[12px] font-bold leading-[20px]">
=======
            <span className="text-cir_black_02 text-xs font-bold leading-5">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
              변경하기
            </span>
          </div>
        </div>
        <div>
          <TypeSelectItem
            selected={true}
            onClick={() => {
              console.log()
            }}
          >
            장애인
          </TypeSelectItem>
        </div>
      </div>
<<<<<<< HEAD
      <div className="mb-[15px]">
=======
      <div className="mb-4">
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
      <div>
        <ActionButtons
          onClick={() => {
            navigate("/login")
          }}
          disabled={false}
        >
          회원탈퇴
        </ActionButtons>
      </div>
    </div>
  )
}
