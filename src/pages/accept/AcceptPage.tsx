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
<<<<<<< HEAD
      <div className="mt-[125px] ml-[45px]">
        <span className="text-[18px] font-bold">약관동의</span>
      </div>
      <div className="font-bold mt-[43px] mb-[27px]">
=======
      <div className="mt-32 ml-11">
        <span className="text-lg font-bold">약관동의</span>
      </div>
      <div className="font-bold mt-11 mb-7">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
      <hr className="w-[344px] h-[0.5px] bg-[#B3B3B3] font-bold ml-[22px]" />
      <ul className="list-none flex flex-col gap-[27px] mt-[30px]">
=======
      <hr className="w-[21.5rem] h-[0.031rem] bg-cir_black_02 font-bold ml-[1.375rem]" />
      <ul className="list-none flex flex-col gap-7 mt-7">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        <li className="relative">
          <CheckboxInput
            onChange={(e) => {
              setUseChecked(e.target.checked)
            }}
            checked={useChecked}
          >
            이용약관 동의
          </CheckboxInput>
<<<<<<< HEAD
          <span className="text-[#0085FF] text-[12px] font-medium absolute top-[2px] left-[160px]">
=======
          <span className="text-cir_blue_01 text-xs font-medium absolute top-[0.125rem] left-40">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
          <span className="text-[#0085FF] text-[12px] font-medium absolute top-[2px] left-[257px]">
=======
          <span className="text-cir_blue_01 text-xs font-medium absolute top-[0.125rem] left-64">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
          <span className="text-[#0085FF] text-[12px] font-medium absolute top-[2px] left-[232px]">
=======
          <span className="text-cir_blue_01 text-xs font-medium absolute top-[0.125rem] left-[14.5rem]">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            (필수)
          </span>
        </li>
      </ul>
<<<<<<< HEAD
      <div className="mt-[396px] text-center">
=======
      <div className="mt-[24.75rem] text-center">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
