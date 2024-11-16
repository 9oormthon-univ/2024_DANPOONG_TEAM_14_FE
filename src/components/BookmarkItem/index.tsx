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
    <div className="flex items-center gap-[14px]">
      <span
        className={`w-[24px] h-[24px] border-solid border-[2px] border-[#CDCDCD] rounded-full transition-all duration-200 ${
          isChecked ? "bg-[#3284FF]" : ""
        }`}
        onClick={() => {
          setIsChecked(!isChecked)
        }}
      />
      <div className="w-[304px] h-[131px] border-solid border-[2px] border-[#E6E6E6] rounded-[20px] flex relative gap-[17.77px] items-center">
        <div className="w-[105.23px] h-[97.53px] bg-[#F1F1F1] rounded-[10px] ml-[20px]"></div>
        <div>
          <div>
            <span className="text-[14px] leading-[20px] font-bold">{name}</span>
          </div>
          <div>
            <span className="text-[12px] font-medium text-[#FFD332]">
              {type}
            </span>
          </div>
        </div>
        <div className="absolute top-[13px] right-[12px]">
          <span className="text-[#CDCDCD] text-[10px] font-bold underline">
            삭제
          </span>
        </div>
      </div>
    </div>
  )
}
