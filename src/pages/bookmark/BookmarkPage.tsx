import { BookmarkItem } from "../../components/BookmarkItem"

export const BookmarkPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-[118px] flex items-center gap-[163px] mb-[22px]">
        <div>
          <span className="text-[18px] font-bold leading-[20px]">
            내 북마크 장소
          </span>
        </div>
        <div>
          <span className="text-[12px] font-bold text-[#CDCDCD] underline">
            전체 삭제
          </span>
        </div>
      </div>
      <div className="mb-[140px]">
        <ul className="flex flex-col gap-[9px]">
          <li>
            <BookmarkItem name={"스타벅스 본점"} type={"카페"} />
          </li>
          <li>
            <BookmarkItem name={"스타벅스 본점"} type={"카페"} />
          </li>
          <li>
            <BookmarkItem name={"스타벅스 본점"} type={"카페"} />
          </li>
          <li>
            <BookmarkItem name={"스타벅스 본점"} type={"카페"} />
          </li>
          <li>
            <BookmarkItem name={"스타벅스 본점"} type={"카페"} />
          </li>
          <li>
            <BookmarkItem name={"스타벅스 본점"} type={"카페"} />
          </li>
          <li>
            <BookmarkItem name={"스타벅스 본점"} type={"카페"} />
          </li>
          <li>
            <BookmarkItem name={"스타벅스 본점"} type={"카페"} />
          </li>
        </ul>
      </div>
    </div>
  )
}
