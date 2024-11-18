import { useStoreType } from "../../hooks/useStoreType"
import { StoreInfoItem } from "../../components/StoreInfoItem"

export const CategoryPage = () => {
  const title = useStoreType()

  return (
<<<<<<< HEAD
    <div className="mt-[92px] flex flex-col">
      <div className="mb-[28px] ml-[45px]">
        <span className="text-[18px] leading-[20px] font-bold">{title}</span>
      </div>
      <div className="mb-[70px]">
        <ul className="flex flex-col items-center gap-[9px] overflow-y-scroll">
=======
    <div className="mt-24 flex flex-col">
      <div className="mb-7 ml-11 ">
        <span className="text-lg leading-5 font-bold">{title}</span>
      </div>
      <div className="mb-[4.375rem]">
        <ul className="flex flex-col items-center gap-2 overflow-y-scroll">
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
