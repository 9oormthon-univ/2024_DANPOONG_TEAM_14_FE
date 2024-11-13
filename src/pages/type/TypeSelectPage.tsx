import { useState } from "react"
import { TypeSelectItem } from "../../components/TypeSelectItem"
import { ActionButtons } from "../../components/ActionButtons"
import { useNavigate } from "react-router-dom"

export const TypeSelectPage = () => {
  const navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const isSelected = (item: string): boolean => item === selectedItem

  return (
    <div className="flex flex-col items-center">
      <div className="text-[18px] leading-[26px] font-bold flex flex-col justify-center mt-[125px]">
        <span>사용자님의 유형을 선택해주세요.</span>
        <span>맞춤 여행 장소를 추천해 드릴게요!</span>
      </div>
      <ul className="flex flex-col items-center gap-[20px] mt-[47px]">
        <li>
          <TypeSelectItem
            desc={
              <>
                물리적, 사회적 장벽으로 인해
                <br />
                일상생활과 사회 참여에 어려움을 겪어요
              </>
            }
            eng={"Disabled person"}
            onClick={() => {
              setSelectedItem("장애인")
            }}
            selected={isSelected("장애인")}
          >
            장애인
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem
            desc={
              <>
                신체적 변화와 건강상의 위험으로
                <br />
                인해 이동과 생활에 불편함을 겪어요.
              </>
            }
            eng={"Pregnant woman"}
            onClick={() => {
              setSelectedItem("임산부")
            }}
            selected={isSelected("임산부")}
          >
            임산부
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem
            desc={
              <>
                체력 저화와 건강 문제로
                <br />
                인해 일상활동에 제약이 있어요.
              </>
            }
            eng={"Elderly person"}
            onClick={() => {
              setSelectedItem("노약자")
            }}
            selected={isSelected("노약자")}
          >
            노약자
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem
            desc={
              <>
                신체적, 정신적 발달 단계에
                <br />
                있어 보호와 지도가 필요해요.
              </>
            }
            eng={"Child"}
            onClick={() => {
              setSelectedItem("어린이")
            }}
            selected={isSelected("어린이")}
          >
            어린이
          </TypeSelectItem>
        </li>
      </ul>
      <div className="text-center mt-[119px]">
        <ActionButtons
          onClick={() => navigate("/done")}
          disabled={selectedItem === null}
        >
          완료
        </ActionButtons>
      </div>
    </div>
  )
}
