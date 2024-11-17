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
    <div className="w-[329px] h-auto border-[#E6E6E6] border-solid border-[2px] rounded-[20px] relative">
      <div className="absolute flex gap-[4px] top-[13px] right-[12px]">
        <div>
          <span className="text-[10px] text-[#CDCDCD] font-bold underline">
            수정
          </span>
        </div>
        <div>
          <span className="text-[10px] text-[#CDCDCD] font-bold underline">
            삭제
          </span>
        </div>
      </div>
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
                {state}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-auto mb-[13px]">
          <span className="text-[10px] font-medium inline-block leading-auto">
            {review}
          </span>
        </div>
        <div className="mb-[10px]">
          <span className="text-[10px] text-[#989898] font-bold underline">
            자세히 보기
          </span>
        </div>
        {isImage && (
          <div className="mb-[21.47px]">
            <ul className="flex gap-[8.77px]">
              <li className="w-[105.23px] h-[97.53px] bg-[#F1F1F1] rounded-[10px]"></li>
              <li className="w-[105.23px] h-[97.53px] bg-[#F1F1F1] rounded-[10px]"></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
