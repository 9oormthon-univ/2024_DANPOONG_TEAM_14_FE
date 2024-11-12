export const TypeSelectItem = ({
  children,
  desc,
}: {
  children: React.ReactNode
  desc: string
}) => {
  return (
    <div className="w-[331px] h-[125px] rounded-[10px] border-2 border-[#E3E1E1] border-solid hover:border-[#000000]">
      <div className="text-[#C4C4C4] flex flex-col h-full pt-[17px] pl-[111px] hover:text-[#212529]">
        <span className="text-[16px]">{children}</span>
        <span className="text-[12px] leading-[14px]">{desc}</span>
      </div>
    </div>
  )
}
