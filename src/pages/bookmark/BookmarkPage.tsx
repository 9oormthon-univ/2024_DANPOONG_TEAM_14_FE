import { useState } from "react"

import { BookmarkItem } from "../../components/BookmarkItem"
import { ActionButtons } from "../../components/ActionButtons"

export const BookmarkPage = () => {
  const [bookmarkStore, setBookmarkStore] = useState([
    {
      name: "스타벅스 본점",
      type: "카페",
    },
    {
      name: "스타벅스1",
      type: "카페",
    },
    {
      name: "스타벅스2",
      type: "카페",
    },
    {
      name: "스타벅스3",
      type: "카페",
    },
  ])

  const handleDeleteBookmark = (index: number) => {
    setBookmarkStore((prev) => prev.filter((_, i) => i !== index))
  }

  const handleDeleteAll = () => {
    setBookmarkStore([])
    console.log("all delete")
  }

  return (
    <div className="flex flex-col items-center relative">
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
      <div className="mb-[10rem]">
        <ul className="flex flex-col gap-2">
          {bookmarkStore.map((bookmark, index) => (
            <li key={index}>
              <BookmarkItem
                name={bookmark.name}
                type={bookmark.type}
                onClick={() => handleDeleteBookmark(index)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[24.563rem] h-[3.75rem] text-center fixed bottom-[3.625rem]">
        <ActionButtons onClick={() => {}} disabled={false}>
          선택 삭제하기
        </ActionButtons>
      </div>
    </div>
  )
}
