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
    <div className="w-[20.563rem] h-auto border-cir_black_03 border-solid border-2 rounded-[1.25rem] relative">
      <div className="absolute flex gap-1 top-3 right-3">
        <div>
          <span className="text-[0.625rem] text-cir_black_03 font-bold underline">
            수정
          </span>
        </div>
        <div>
          <span className="text-[0.625rem] text-cir_black_03 font-bold underline">
            삭제
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-6 ml-7">
        <div className="flex gap-3 mb-3">
          <div>
            <span className="text-sm leading-5 font-bold">{store}</span>
          </div>
          <div className="w-[4.454rem] h-6 rounded-md bg-cir_yellow_01 text-center">
            <div>
              <span className="text-cir_white text-[0.5rem] font-bold">
                {state}
              </span>
            </div>
          </div>
        </div>
        <div className="w-w-[12.5rem] h-auto mb-6">
          <span className="text-[0.625rem] font-medium inline-block leading-auto">
            {review}
          </span>
        </div>
        <div className="mb-[0.625rem]">
          <span className="text-[0.625rem] text-cir_black_02 font-bold underline">
            자세히 보기
          </span>
        </div>
        {isImage && (
          <div className="mb-[1.342rem]">
            <ul className="flex gap-[0.548rem]">
              <li className="w-[6.577rem] h-[6.096rem] bg-cir_black_03 rounded-lg"></li>
              <li className="w-[6.577rem] h-[6.096rem] bg-cir_black_03 rounded-lg"></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
