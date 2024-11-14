import { useNavigate } from "react-router-dom"

import { FiCamera } from "react-icons/fi"

import { ActionButtons } from "../../components/ActionButtons"
import { InputItem } from "../../components/InputItem"
import { TypeSelectItem } from "../../components/TypeSelectItem"

export const ProfileEditPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center mt-[85px]">
      <div className="mb-[4px]">
        <div className="relative">
          <div className="w-[75px] h-[75px] bg-[#D9D9D9] rounded-[50%]"></div>
          <div className="w-[37px] h-[37px] bg-[#ffffff] rounded-[50%] absolute bottom-[-4px] right-[-6px] z-10 flex justify-center items-center">
            <div className="w-[34px] h-[34px] bg-[#D9D9D9] rounded-[50%] flex justify-center items-center">
              <FiCamera className="w-[12px] h-[12px] text-[#ffffff]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[21px]">
        <div className="mb-[16px]">
          <span className="text-[16px] leading-[20px] font-bold">이름</span>
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
      <div className="flex items-center gap-[51px]">
        <div>
          <div className="mb-[12px]">
            <span className="text-[16px] leading-[20px] font-bold">나이</span>
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
            <div className="ml-[9px]">
              <span className="text-[14px] leading-[20px] font-medium">세</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-[12px]">
            <span className="text-[16px] leading-[20px] font-bold">성별</span>
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
      <div className="flex flex-col items-center mb-[129px]">
        <div className="flex items-center gap-[191px] mb-[22px] mt-[51px]">
          <div>
            <span className="text-[16px] font-bold leading-[20px]">
              이동약자 유형
            </span>
          </div>
          <div
            onClick={() => {
              navigate("/circle-me/profile/edit/types")
            }}
          >
            <span className="text-[#989898] text-[12px] font-bold leading-[20px]">
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
      <div className="mb-[15px]">
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
