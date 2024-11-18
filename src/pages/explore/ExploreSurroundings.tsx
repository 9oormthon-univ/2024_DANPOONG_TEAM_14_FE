import { useNavigate } from "react-router-dom"

import { ActionButtons } from "../../components/ActionButtons"

export const ExploreSurroundings = () => {
  const navigate = useNavigate()

  return (
<<<<<<< HEAD
    <div className="flex flex-col pt-[301px] gap-[30px] items-center">
=======
    <div className="flex flex-col pt-[18.75rem] gap-[1.875rem] items-center">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
