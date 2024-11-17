import { IoIosArrowForward } from "react-icons/io"
import { LocationItem } from "../LocationItem"

export const MyCollection = ({
  collection,
  onClick,
}: {
  collection: string
  onClick: () => void
}) => {
  let subTitle: string = ""

  const title = ({ collection }: { collection: string }): string => {
    if (collection === "리뷰") {
      subTitle = "내 작성리뷰 모두 보기"
      return "내 작성리뷰"
    } else if (collection === "북마크") {
      subTitle = "내 북마크 장소 모두 보기"
      return "내 북마크 장소 모두 보기"
    }

    return ""
  }

  return (
    <div>
      <div className="mb-[15px]">
        <span className="text-[16px] font-bold leading-[20px]">
          {title({ collection })}
        </span>
      </div>
      <div className="w-[329px] h-[234px] border-solid border-[2px] border-[#E6E6E6] rounded-[20px]">
        <div
          className="flex items-center mt-[21px] ml-[20px] mr-[20px] mb-[26px] justify-between"
          onClick={onClick}
        >
          <div>
            <span className="text-[14px] font-bold leading-[20px]">
              {subTitle}
            </span>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="ml-[20px]">
          <ul className="flex items-center gap-[8.77px] overflow-x-scroll">
            <li>
              <LocationItem
                usage={collection}
                state={collection === "리뷰" ? "조금 불편했어요" : ""}
                restaurantType={collection === "리뷰" ? "" : "식당"}
                restaurant={"소고기 전문 식당"}
              />
            </li>
            <li>
              <LocationItem
                usage={collection}
                state={collection === "리뷰" ? "조금 불편했어요" : ""}
                restaurantType={collection === "리뷰" ? "" : "식당"}
                restaurant={"소고기 전문 식당"}
              />
            </li>
            <li>
              <LocationItem
                usage={collection}
                state={collection === "리뷰" ? "조금 불편했어요" : ""}
                restaurantType={collection === "리뷰" ? "" : "식당"}
                restaurant={"소고기 전문 식당"}
              />
            </li>
            <li>
              <LocationItem
                usage={collection}
                state={collection === "리뷰" ? "조금 불편했어요" : ""}
                restaurantType={collection === "리뷰" ? "" : "식당"}
                restaurant={"소고기 전문 식당"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
