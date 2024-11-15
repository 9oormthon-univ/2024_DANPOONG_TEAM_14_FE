import { useNavigate } from "react-router-dom"

import { ActionButtons } from "../../components/ActionButtons"

export const ExploreSurroundings = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col pt-[301px] gap-[30px] items-center">
      <div>
        <ActionButtons
          onClick={() => {
            navigate("/circle-me/explore/surroundings/theme")
          }}
          disabled={false}
        >
          주변 탐색하기
        </ActionButtons>
      </div>
      <div>
        <ActionButtons
          onClick={() => {
            navigate("/circle-me/explore/surroundings/type")
          }}
          disabled={false}
        >
          이동약자 탐색하기
        </ActionButtons>
      </div>
    </div>
  )
}
