export const ActionButtons = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}) => {
  if (children === "다음") {
    return (
      <button
        className="w-[344px] h-[49.74px] bg-[#B3B3B3] text-[#FFFFFF] rounded-[10px]"
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className="w-[344px] h-[49.74px] bg-[skyblue] text-[#FFFFFF] rounded-[10px]"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
