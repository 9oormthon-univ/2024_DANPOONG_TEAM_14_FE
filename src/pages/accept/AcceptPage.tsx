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
      <div className="mt-[125px] ml-[45px]">
        <span className="text-[18px] font-bold">약관동의</span>
      </div>
      <div className="font-bold mt-[43px] mb-[27px]">
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
      <ul className="list-none flex flex-col gap-[27px] mt-[30px]">
        <li className="relative">
          <CheckboxInput
            onChange={(e) => {
              setUseChecked(e.target.checked)
            }}
            checked={useChecked}
          >
            이용약관 동의
          </CheckboxInput>
          <span className="text-[#0085FF] text-[12px] font-medium absolute top-[2px] left-[160px]">
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
          <span className="text-[#0085FF] text-[12px] font-medium absolute top-[2px] left-[257px]">
            (필수)
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
          <span className="text-[#0085FF] text-[12px] font-medium absolute top-[2px] left-[232px]">
            (필수)
          </span>
        </li>
      </ul>
      <div className="mt-[396px] text-center">
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
