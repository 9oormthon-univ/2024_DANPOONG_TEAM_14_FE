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
              {restaurantType}
            </span>
          )}
        </div>
        <div>
          <span className="text-[0.5rem] font-bold leading-4">
            {restaurant}
          </span>
        </div>
      </div>
    </div>
  )
}
