export const InputItem = ({
  type,
  width,
  height,
  placeholder,
}: {
  type: string
  width: number
  height: number
  placeholder: string
}) => {
  if (type === "select") {
    return (
      <div>
        <select
          className={`rounded-[10px] text-[14px] text-[#CDCDCD] placeholder-bold placeholder-[#CDCDCD] border-[#CDCDCD] border-solid border-[1.5px]`}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </div>
    )
  }

  return (
    <div>
      <input
        type={type}
        className={`rounded-[10px] text-[14px] placeholder-bold placeholder-[#CDCDCD] border-[#CDCDCD] border-solid border-[1.5px] pl-[21px]`}
        placeholder={placeholder}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  )
}
