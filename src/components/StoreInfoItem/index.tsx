export const StoreInfoItem = ({
  store,
  address,
}: {
  store: string
  address: string
}) => {
  return (
    <div className="w-[328px] h-[131px] rounded-[20px] border-solid border-[2px] border-[#E6E6E6] flex gap-[17.77px] items-center relative">
      <div className="w-[105.23px] h-[97.53px] bg-[#F1F1F1] rounded-[10px] ml-[36px]"></div>
      <div>
        <div>
          <span className="text-[14px] leading-[20px] font-bold">{store}</span>
        </div>
        <div>
          <span className="text-[12px] font-medium">{address}</span>
        </div>
      </div>
      <div className="absolute top-[13px] right-[12px] ">
        <span className="text-[10px] font-bold text-[#CDCDCD] underline">
          삭제
        </span>
      </div>
    </div>
  )
}
