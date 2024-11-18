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
<<<<<<< HEAD
        className={`w-[320px] h-[55px] ${
          disabled ? "bg-[#B3B3B3]" : "bg-[#3284FF]"
        } text-[#FFFFFF] rounded-[10px] cursor-pointer text-[14px] font-bold`}
=======
        className={`w-80 h-14  ${
          disabled ? "bg-cir_black_02" : "bg-cir_blue_01"
        } text-white rounded-lg text-sm font-bold`}
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  } else if (children === "로그아웃") {
    return (
      <button
<<<<<<< HEAD
        className={`w-[320px] h-[55px] ${
          location.pathname.includes("/edit")
            ? "bg-[#FFD332] text-[#FFFFFF]"
            : "bg-[#F1F1F1] text-[#3284FF]"
        } text-[14px] font-bold rounded-[10px] cursor-pointer`}
=======
        className={`w-80 h-14 ${
          location.pathname.includes("/edit")
            ? "bg-cir_yellow_01 text-cir_white"
            : "bg-cir_black_03 text-cir_blue_01"
        }  font-bold rounded-lg text-sm `}
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  } else if (children === "회원탈퇴") {
    return (
      <button
<<<<<<< HEAD
        className={`w-[320px] h-[55px] bg-[#3284FF] text-[#FFFFFF] text-[14px] font-bold rounded-[10px] cursor-pointer`}
=======
        className={`w-80 h-14 bg-cir_blue_01 text-cir_white rounded-lg text-sm font-bold `}
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
        className={`w-[312px] h-[110px] ${
          children === "주변 탐색하기" ? "bg-[#FFD332]" : "bg-[#3284FF]"
        } rounded-[10px] cursor-pointer`}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-[18px] font-bold text-[#ffffff]">{children}</span>
=======
        className={`w-[19.5rem] h-[6.875rem] ${
          children === "주변 탐색하기" ? "bg-cir_yellow_01" : "bg-cir_blue_01"
        } rounded-lg  `}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-lg font-bold text-cir_white">{children}</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
      </button>
    )
  }

  if (location.pathname.includes("/type")) {
    return (
      <button
<<<<<<< HEAD
        className="w-[162px] h-[175px] bg-[#FFD332] rounded-[10px]"
        onClick={onClick}
      >
        <span className="text-[18px] text-[#ffffff] font-bold">{children}</span>
=======
        className="w-40 h-44 bg-cir_yellow_01 rounded-lg"
        onClick={onClick}
      >
        <span className=" text-cir_white font-bold">{children}</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
      </button>
    )
  }

  if (location.pathname.includes("/theme")) {
    return (
      <button
<<<<<<< HEAD
        className="w-[312px] h-[110px] bg-[#CDCDCD] rounded-[10px] hover:bg-[#FFD332]"
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-[18px] text-[#ffffff] font-bold">{children}</span>
=======
        className="w-[19.5rem] h-[6.875rem]  bg-cir_black_03 rounded-lg hover:bg-cir_yellow_01"
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-lg text-cir_white font-bold">{children}</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
      </button>
    )
  }

  return (
    <button
<<<<<<< HEAD
      className="w-[300px] h-[55px] bg-[#FFD332] rounded-[10px] cursor-pointer"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="text-[#FFFFFF] font-bold text-[14px]">{children}</span>
=======
      className="w-[18.75rem] h-14 bg-cir_yellow_01 rounded-lg  "
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="text-cir_white font-bold text-sm">{children}</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
    </button>
  )
}
