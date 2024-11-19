import { BookmarkItem } from "../../components/BookmarkItem"

export const BookmarkPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-[7.375rem] flex items-center gap-40 mb-5">
        <div>
          <span className="text-lg font-bold leading-5">내 북마크 장소</span>
        </div>
        <div>
          <span className="text-xs font-bold text-dong_light_gray underline">
            전체 삭제
          </span>
        </div>
      </div>
      <div className="mb-[8.75rem]">
        <ul className="flex flex-col gap-2">
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
