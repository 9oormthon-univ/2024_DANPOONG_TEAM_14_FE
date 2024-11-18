import { useState } from "react"

export const BookmarkItem = ({
  name,
  type,
}: {
  name: string
  type: string
}) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
<<<<<<< HEAD
    <div className="flex items-center gap-[14px]">
      <span
        className={`w-[24px] h-[24px] border-solid border-[2px] border-[#CDCDCD] rounded-full transition-all duration-200 ${
          isChecked ? "bg-[#3284FF]" : ""
=======
    <div className="flex items-center gap-4">
      <span
        className={`w-6 h-6 border-solid border-2 border-cir_black_03 rounded-full transition-all duration-200 ${
          isChecked ? "bg-cir_blue_01" : ""
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        }`}
        onClick={() => {
          setIsChecked(!isChecked)
        }}
      />
<<<<<<< HEAD
      <div className="w-[304px] h-[131px] border-solid border-[2px] border-[#E6E6E6] rounded-[20px] flex relative gap-[17.77px] items-center">
        <div className="w-[105.23px] h-[97.53px] bg-[#F1F1F1] rounded-[10px] ml-[20px]"></div>
        <div>
          <div>
            <span className="text-[14px] leading-[20px] font-bold">{name}</span>
          </div>
          <div>
            <span className="text-[12px] font-medium text-[#FFD332]">
=======
      <div className="w-[19rem] h-32 border-solid border-2 border-cir_black_03 rounded-[1.25rem] flex relative gap-[1.111rem] items-center">
        <div className="w-[6.577rem] h-[6.096rem] bg-cir_black_03 rounded-lg ml-5"></div>
        <div>
          <div>
            <span className="text-sm leading-5 font-bold">{name}</span>
          </div>
          <div>
            <span className="text-xs font-medium text-cir_yellow_01">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
              {type}
            </span>
          </div>
        </div>
<<<<<<< HEAD
        <div className="absolute top-[13px] right-[12px]">
          <span className="text-[#CDCDCD] text-[10px] font-bold underline">
=======
        <div className="absolute top-3 right-3">
          <span className="text-cir_black_03 text-[0.625rem] font-bold underline">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            삭제
          </span>
        </div>
      </div>
    </div>
  )
}
