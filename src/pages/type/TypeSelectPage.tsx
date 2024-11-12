import { TypeSelectItem } from "../../components/TypeSelectItem"
import { ActionButtons } from "../../components/ActionButtons"
import { useNavigate } from "react-router-dom"

export const TypeSelectPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="text-[20px] font-bold flex flex-col justify-center mt-[48px] ml-[22px]">
        <span>사용자님의 유형을 선택해주세요.</span>
        <span>맞춤 여행 장소를 추천해 드려요.</span>
      </div>
      <div className="text-[13px] text-[#797979] mt-[2px] ml-[22px] mb-[35px]">
        <span>동그라미에서 즐거운 여행을 도울게요!</span>
      </div>
      <ul className="flex flex-col items-center gap-[35px]">
        <li>
          <TypeSelectItem desc="장애인 화장실이 필요해요">
            장애인
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem desc="접근이 용이하면 좋겠어요">
            임산부
          </TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem desc="">노약자</TypeSelectItem>
        </li>
        <li>
          <TypeSelectItem desc="어깨부터 엉덩이가지의 라인이 직선에 가까운 체형이에요.">
            어린이
          </TypeSelectItem>
        </li>
      </ul>
      <div className="text-center mt-[35px]">
        <ActionButtons onClick={() => navigate("/done")} disabled={false}>
          다음
        </ActionButtons>
      </div>
    </div>
  )
}
