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
          className={`rounded-lg text-sm text-cir_black_03 placeholder-bold placeholder-cir_black_03 border-cir_black_03 border-solid border-[0.094rem]`}
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
        className={`rounded-lg text-sm placeholder-bold placeholder-cir_black_03 border-cir_black_03 border-solid border-[0.094rem] pl-5`}
        placeholder={placeholder}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  )
}
