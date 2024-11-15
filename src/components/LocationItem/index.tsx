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
              {restaurantType}
            </span>
          )}
        </div>
        <div>
          <span className="text-[8px] font-bold leading-[16px]">
            {restaurant}
          </span>
        </div>
      </div>
    </div>
  )
}
