export const ActionButtons = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}) => {
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
