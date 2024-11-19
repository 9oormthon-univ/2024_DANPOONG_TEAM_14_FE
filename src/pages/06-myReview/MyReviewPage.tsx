import { ReviewItem } from "../../components/ReviewItem"

export const MyReviewPage = () => {
  return (
    <div>
      <div className="pt-28 ml-11 mb-5">
        <span className="text-lg leading-5 font-bold">내 작성 리뷰</span>
      </div>
      <div className="pb-4">
        <ul className="flex flex-col items-center gap-4">
          <li>
            <ReviewItem
              store={"소고기 전문 식당"}
              state={"편했어요"}
              review={
                "고기도 너무 맛있고 전반적으로 만족스럽습니다.불편함이 적었던 식당입니다!"
              }
              isImage={true}
            />
          </li>
          <li>
            <ReviewItem
              store={"소고기 전문 식당"}
              state={"편했어요"}
              review={
                "고기도 너무 맛있고 전반적으로 만족스럽습니다.불편함이 적었던 식당입니다!"
              }
              isImage={false}
            />
          </li>
          <li>
            <ReviewItem
              store={"소고기 전문 식당"}
              state={"편했어요"}
              review={
                "고기도 너무 맛있고 전반적으로 만족스럽습니다.불편함이 적었던 식당입니다!"
              }
              isImage={true}
            />
          </li>
          <li>
            <ReviewItem
              store={"소고기 전문 식당"}
              state={"편했어요"}
              review={
                "고기도 너무 맛있고 전반적으로 만족스럽습니다.불편함이 적었던 식당입니다!"
              }
              isImage={true}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
