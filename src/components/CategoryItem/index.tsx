export const CategoryItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[72px] h-[27px] rounded-[8px] bg-[#CDCDCD] text-center">
      <span className="text-[10px] font-bold text-[#ffffff]">{children}</span>
    </div>
  )
}
