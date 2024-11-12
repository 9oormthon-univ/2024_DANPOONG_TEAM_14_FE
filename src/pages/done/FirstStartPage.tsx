import { ActionButtons } from "../../components/ActionButtons"
import { useNavigate } from "react-router-dom"

export const FirstStartPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <span>동그라me 가입 환영</span>
      </div>
      <div>
        <ActionButtons
          onClick={() => {
            navigate("/start")
          }}
          disabled={false}
        >
          동그라me 시작하기
        </ActionButtons>
      </div>
    </div>
  )
}
