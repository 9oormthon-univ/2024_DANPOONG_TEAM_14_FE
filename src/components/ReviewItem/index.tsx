export const ReviewItem = ({
  store,
  state,
  review,
  isImage,
}: {
  store: string
  state: string
  review: string
  isImage: boolean
}) => {
  return (
<<<<<<< HEAD
    <div className="w-[329px] h-auto border-[#E6E6E6] border-solid border-[2px] rounded-[20px] relative">
      <div className="absolute flex gap-[4px] top-[13px] right-[12px]">
        <div>
          <span className="text-[10px] text-[#CDCDCD] font-bold underline">
=======
    <div className="w-[20.563rem] h-auto border-cir_black_03 border-solid border-2 rounded-[1.25rem] relative">
      <div className="absolute flex gap-1 top-3 right-3">
        <div>
          <span className="text-[0.625rem] text-cir_black_03 font-bold underline">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            수정
          </span>
        </div>
        <div>
<<<<<<< HEAD
          <span className="text-[10px] text-[#CDCDCD] font-bold underline">
=======
          <span className="text-[0.625rem] text-cir_black_03 font-bold underline">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            삭제
          </span>
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex flex-col mt-[23px] ml-[27px]">
        <div className="flex gap-[12px] mb-[11px]">
          <div>
            <span className="text-[14px] leading-[20px] font-bold">
              {store}
            </span>
          </div>
          <div className="w-[71.27px] h-[24px] rounded-[6px] bg-[#FFD332] text-center">
            <div>
              <span className="text-[#ffffff] text-[8px] font-bold">
=======
      <div className="flex flex-col mt-6 ml-7">
        <div className="flex gap-3 mb-3">
          <div>
            <span className="text-sm leading-5 font-bold">{store}</span>
          </div>
          <div className="w-[4.454rem] h-6 rounded-md bg-cir_yellow_01 text-center">
            <div>
              <span className="text-cir_white text-[0.5rem] font-bold">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
                {state}
              </span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="w-[200px] h-auto mb-[13px]">
          <span className="text-[10px] font-medium inline-block leading-auto">
            {review}
          </span>
        </div>
        <div className="mb-[10px]">
          <span className="text-[10px] text-[#989898] font-bold underline">
=======
        <div className="w-w-[12.5rem] h-auto mb-6">
          <span className="text-[0.625rem] font-medium inline-block leading-auto">
            {review}
          </span>
        </div>
        <div className="mb-[0.625rem]">
          <span className="text-[0.625rem] text-cir_black_02 font-bold underline">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            자세히 보기
          </span>
        </div>
        {isImage && (
<<<<<<< HEAD
          <div className="mb-[21.47px]">
            <ul className="flex gap-[8.77px]">
              <li className="w-[105.23px] h-[97.53px] bg-[#F1F1F1] rounded-[10px]"></li>
              <li className="w-[105.23px] h-[97.53px] bg-[#F1F1F1] rounded-[10px]"></li>
=======
          <div className="mb-[1.342rem]">
            <ul className="flex gap-[0.548rem]">
              <li className="w-[6.577rem] h-[6.096rem] bg-cir_black_03 rounded-lg"></li>
              <li className="w-[6.577rem] h-[6.096rem] bg-cir_black_03 rounded-lg"></li>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
