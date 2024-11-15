import { ActionButtons } from "../../components/ActionButtons"

export const ExploreType = () => {
  return (
    <div className="mt-[125px] flex flex-col items-center">
      <div>
        <span className="text-[18px] font-bold leading-[26px]">
          사용자님의 유형을 선택해주세요.
        </span>
      </div>
      <div className="mt-[101px]">
        <ul className="grid grid-cols-2 gap-[18px]">
          <li>
            <ActionButtons onClick={() => {}} disabled={false}>
              장애인
            </ActionButtons>
          </li>
          <li>
            <ActionButtons onClick={() => {}} disabled={false}>
              노약자
            </ActionButtons>
          </li>
          <li>
            <ActionButtons onClick={() => {}} disabled={false}>
              임산부
            </ActionButtons>
          </li>
          <li>
            <ActionButtons onClick={() => {}} disabled={false}>
              어린이
            </ActionButtons>
          </li>
        </ul>
      </div>
    </div>
  )
}
