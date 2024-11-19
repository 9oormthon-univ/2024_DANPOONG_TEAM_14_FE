import { useLocation } from "react-router-dom"

export const ActionButtons = ({
  children,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}) => {
  const location = useLocation()

  if (
    children === "다음" ||
    children === "완료" ||
    children === "선택 삭제하기"
  ) {
    return (
      <button
        className={`w-80 h-14  ${
          disabled ? "bg-cir_black_02" : "bg-cir_blue_01"
        } text-white rounded-lg text-sm font-bold`}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  } else if (children === "로그아웃") {
    return (
      <button
        className={`w-80 h-14 ${
          location.pathname.includes("/edit")
            ? "bg-cir_yellow_01 text-cir_white"
            : "bg-cir_black_03 text-cir_blue_01"
        }  font-bold rounded-lg text-sm `}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  } else if (children === "회원탈퇴") {
    return (
      <button
        className={`w-80 h-14 bg-cir_blue_01 text-cir_white rounded-lg text-sm font-bold `}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }

  if (children === "주변 탐색하기" || children === "이동약자 탐색하기") {
    return (
      <button
        className={`w-[19.5rem] h-[6.875rem] ${
          children === "주변 탐색하기" ? "bg-cir_yellow_01" : "bg-cir_blue_01"
        } rounded-lg  `}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-lg font-bold text-cir_white">{children}</span>
      </button>
    )
  }

  if (location.pathname.includes("/type")) {
    return (
      <button
        className="w-40 h-44 bg-cir_yellow_01 rounded-lg"
        onClick={onClick}
      >
        <span className=" text-cir_white font-bold">{children}</span>
      </button>
    )
  }

  if (location.pathname.includes("/theme")) {
    return (
      <button
        className="w-[19.5rem] h-[6.875rem]  bg-cir_black_03 rounded-lg hover:bg-cir_yellow_01"
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-lg text-cir_white font-bold">{children}</span>
      </button>
    )
  }

  return (
    <button
      className="w-[18.75rem] h-14 bg-cir_yellow_01 rounded-lg  "
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="text-cir_white font-bold text-sm">{children}</span>
    </button>
  )
}
