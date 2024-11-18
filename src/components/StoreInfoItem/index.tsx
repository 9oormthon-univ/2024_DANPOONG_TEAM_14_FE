export const StoreInfoItem = ({
  store,
  address,
}: {
  store: string
  address: string
}) => {
  return (
<<<<<<< HEAD
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
=======
    <div className="w-80 h-32 rounded-[1.25rem] border-solid border-2 border-cir_black_03 flex gap-[1.111rem] items-center relative">
      <div className="w-[6.577rem] h-[6.096rem] bg-cir_black_03 rounded-lg ml-9"></div>
      <div>
        <div>
          <span className="text-sm leading-5 font-bold">{store}</span>
        </div>
        <div>
          <span className="text-xs font-medium">{address}</span>
        </div>
      </div>
      <div className="absolute top-3 right-3 ">
        <span className="text-[0.625rem] font-bold text-cir_black_03 underline">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          삭제
        </span>
      </div>
    </div>
  )
}
