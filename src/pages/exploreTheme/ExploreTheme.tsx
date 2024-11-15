import { ActionButtons } from "../../components/ActionButtons"

export const ExploreTheme = () => {
  return (
    <div className="mt-[171px]">
      <ul className="flex flex-col gap-[10px] items-center">
        <li>
          <ActionButtons onClick={() => {}} disabled={false}>
            카페
          </ActionButtons>
        </li>
        <li>
          <ActionButtons onClick={() => {}} disabled={false}>
            음식점
          </ActionButtons>
        </li>
        <li>
          <ActionButtons onClick={() => {}} disabled={false}>
            문화시설
          </ActionButtons>
        </li>
        <li>
          <ActionButtons onClick={() => {}} disabled={false}>
            놀이공원
          </ActionButtons>
        </li>
        <li>
          <ActionButtons onClick={() => {}} disabled={false}>
            숙박업소
          </ActionButtons>
        </li>
      </ul>
    </div>
  )
}
