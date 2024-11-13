export const TypeSelectItem = ({
  children,
  eng,
  desc,
  selected,
  onClick,
}: {
  children: React.ReactNode
  eng: string
  desc: React.ReactNode
  selected: boolean
  onClick: () => void
}) => {
  return (
    <div
      className={`w-[300px] h-[90px] rounded-[10px] border-2 ${
        selected ? "bg-[#FFD332]" : "bg-[#CDCDCD]"
      } border-solid hover:border-[#FFD332] cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`text-[#ffffff] rounded-[10px] ${
          selected ? "bg-[#FFD332]" : "bg-[#CDCDCD]"
        } flex flex-col h-full pt-[20px] pl-[31px] hover:border-[#FFD332] cursor-pointer`}
        onClick={onClick}
      >
        <span className="text-[14px] font-bold mb-[4px]">
          {children}
          <span className="text-[6px] ml-[4px]">{eng}</span>
        </span>
        <span className="text-[10px] font-medium">{desc}</span>
      </div>
    </div>
  )
}
