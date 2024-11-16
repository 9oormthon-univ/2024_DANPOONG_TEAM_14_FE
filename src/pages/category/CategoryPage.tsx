import { useStoreType } from "../../hooks/useStoreType"
import { StoreInfoItem } from "../../components/StoreInfoItem"

export const CategoryPage = () => {
  const title = useStoreType()

  return (
    <div className="mt-[92px] flex flex-col">
      <div className="mb-[28px] ml-[45px]">
        <span className="text-[18px] leading-[20px] font-bold">{title}</span>
      </div>
      <div className="mb-[70px]">
        <ul className="flex flex-col items-center gap-[9px] overflow-y-scroll">
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
          <li>
            <StoreInfoItem store={"스타벅스 본점"} address={"서울 영등포구"} />
          </li>
        </ul>
      </div>
    </div>
  )
}
