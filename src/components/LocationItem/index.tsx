export const LocationItem = ({
  usage,
  state = "",
  restaurantType = "",
  restaurant,
}: {
  usage: string
  state: string
  restaurantType: string
  restaurant: string
}) => {
  return (
<<<<<<< HEAD
    <div className="w-[105.23px] h-[135.17px] bg-[#F1F1F1] rounded-[10px] flex flex-col">
      <div className="w-full h-[97.53px] bg-[#CDCDCD] rounded-[10px] mb-[-2.47px]"></div>
      <div className="flex flex-col ml-[13px]">
        <div className="mb-[-10px]">
          {usage === "리뷰" ? (
            <span className="text-[6px] leading-[16px] font-medium text-[#3284FF]">
              {state}
            </span>
          ) : (
            <span className="text-[6px] leading-[16px] font-medium text-[#3284FF]">
=======
    <div className="w-[6.577rem] h-[8.448rem] bg-cir_black_03 rounded-lg flex flex-col">
      <div className="w-full h-[6.096rem] bg-cir_black_03 rounded-lg mb-[-0.154rem]"></div>
      <div className="flex flex-col ml-3">
        <div className="mb-[-0.625rem]">
          {usage === "리뷰" ? (
            <span className="text-[0.375rem] leading-4 font-medium text-cir_blue_01">
              {state}
            </span>
          ) : (
            <span className="text-[0.375rem] leading-4 font-medium text-cir_blue_01">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
              {restaurantType}
            </span>
          )}
        </div>
        <div>
<<<<<<< HEAD
          <span className="text-[8px] font-bold leading-[16px]">
=======
          <span className="text-[0.5rem] font-bold leading-4">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            {restaurant}
          </span>
        </div>
      </div>
    </div>
  )
}
