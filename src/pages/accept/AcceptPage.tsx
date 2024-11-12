import { useState, useEffect } from "react"
import { ActionButtons } from "../../components/ActionButtons"
import { CheckboxInput } from "../../components/CheckboxInput"
import { useNavigate } from "react-router-dom"

export const AcceptPage = () => {
  const navigate = useNavigate()

  const [allChecked, setAllChecked] = useState<boolean>(false)
  const [useChecked, setUseChecked] = useState<boolean>(false)
  const [locationChecked, setLocationChecked] = useState<boolean>(false)
  const [personalChecked, setPersonalChecked] = useState<boolean>(false)

  useEffect(() => {
    const isAllChecked = useChecked && locationChecked && personalChecked
    setAllChecked(isAllChecked)
  }, [useChecked, locationChecked, personalChecked])

  return (
    <div>
      <div className="mt-[82px] ml-[21px]">
        <span className="text-[16px] font-bold">약관동의</span>
      </div>
      <div className="font-bold mt-[15px] mb-[16px]">
        <CheckboxInput
          onChange={(e) => {
            setAllChecked(e.target.checked)
            setUseChecked(e.target.checked)
            setLocationChecked(e.target.checked)
            setPersonalChecked(e.target.checked)
          }}
          checked={allChecked}
        >
          전체 동의
        </CheckboxInput>
      </div>
      <hr className="w-[344px] h-[0.5px] bg-[#B3B3B3] font-bold ml-[22px]" />
      <ul className="list-none flex flex-col gap-[20px] mt-[21px]">
        <li className="relative">
          <CheckboxInput
            onChange={(e) => {
              setUseChecked(e.target.checked)
            }}
            checked={useChecked}
          >
            이용약관 동의
          </CheckboxInput>
          <span className="text-[#0085FF] text-[8px] absolute top-[2px] left-[144px]">
            (필수)
          </span>
        </li>
        <li className="relative">
          <CheckboxInput
            onChange={(e) => {
              setLocationChecked(e.target.checked)
            }}
            checked={locationChecked}
          >
            위치기반 서비스 이용 약관 동의
          </CheckboxInput>
          <span className="text-[#0085FF] text-[8px] absolute top-[2px] left-[258px]">
            (필수)
          </span>
          <span className="text-[#B3B3B3] text-[8px] absolute right-[24px] top-[2px]">
            약관보기
          </span>
        </li>
        <li className="relative">
          <CheckboxInput
            onChange={(e) => {
              setPersonalChecked(e.target.checked)
            }}
            checked={personalChecked}
          >
            개인정보 수집 및 이용 동의
          </CheckboxInput>
          <span className="text-[#0085FF] text-[8px] absolute top-[2px] left-[228px]">
            (필수)
          </span>
        </li>
      </ul>
      <div className="mt-[496px] text-center">
        <ActionButtons
          onClick={() => navigate("/types")}
          disabled={!allChecked}
        >
          다음
        </ActionButtons>
      </div>
    </div>
  )
}
