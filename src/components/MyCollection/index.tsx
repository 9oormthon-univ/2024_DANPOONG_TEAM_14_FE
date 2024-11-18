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
<<<<<<< HEAD
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
=======
      <div className="mb-4">
        <span className="text-base  font-bold leading-5">
          {title({ collection })}
        </span>
      </div>
      <div className="w-[20.563rem] h-[14.625rem] border-solid border-2 border-cir_black_03 rounded-[1.25rem]">
        <div
          className="flex items-center mt-5 ml-5 mr-5 mb-6 justify-between"
          onClick={onClick}
        >
          <div>
            <span className="text-sm font-bold leading-5">{subTitle}</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
<<<<<<< HEAD
        <div className="ml-[20px]">
          <ul className="flex items-center gap-[8.77px] overflow-x-scroll">
=======
        <div className="ml-5">
          <ul className="flex items-center gap-[0.548rem] overflow-x-scroll">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
