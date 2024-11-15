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

  if (children === "다음" || children === "완료") {
    return (
      <button
        className={`w-[320px] h-[55px] ${
          disabled ? "bg-[#B3B3B3]" : "bg-[#3284FF]"
        } text-[#FFFFFF] rounded-[10px] cursor-pointer text-[14px] font-bold`}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  } else if (children === "로그아웃") {
    return (
      <button
        className={`w-[320px] h-[55px] ${
          location.pathname.includes("/edit")
            ? "bg-[#FFD332] text-[#FFFFFF]"
            : "bg-[#F1F1F1] text-[#3284FF]"
        } text-[14px] font-bold rounded-[10px] cursor-pointer`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  } else if (children === "회원탈퇴") {
    return (
      <button
        className={`w-[320px] h-[55px] bg-[#3284FF] text-[#FFFFFF] text-[14px] font-bold rounded-[10px] cursor-pointer`}
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
        className={`w-[312px] h-[110px] ${
          children === "주변 탐색하기" ? "bg-[#FFD332]" : "bg-[#3284FF]"
        } rounded-[10px] cursor-pointer`}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-[18px] font-bold text-[#ffffff]">{children}</span>
      </button>
    )
  }

  if (location.pathname.includes("/type")) {
    return (
      <button className="w-[162px] h-[175px] bg-[#FFD332] rounded-[10px]">
        <span className="text-[18px] text-[#ffffff] font-bold">{children}</span>
      </button>
    )
  }

  if (location.pathname.includes("/theme")) {
    return (
      <button className="w-[312px] h-[110px] bg-[#CDCDCD] rounded-[10px]">
        <span className="text-[18px] text-[#ffffff] font-bold">{children}</span>
      </button>
    )
  }

  return (
    <button
      className="w-[300px] h-[55px] bg-[#FFD332] rounded-[10px] cursor-pointer"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="text-[#FFFFFF] font-bold text-[14px]">{children}</span>
    </button>
  )
}
