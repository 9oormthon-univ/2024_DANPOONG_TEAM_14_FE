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
<<<<<<< HEAD
          className={`rounded-[10px] text-[14px] text-[#CDCDCD] placeholder-bold placeholder-[#CDCDCD] border-[#CDCDCD] border-solid border-[1.5px]`}
=======
          className={`rounded-lg text-sm text-cir_black_03 placeholder-bold placeholder-cir_black_03 border-cir_black_03 border-solid border-[0.094rem]`}
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
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
<<<<<<< HEAD
        className={`rounded-[10px] text-[14px] placeholder-bold placeholder-[#CDCDCD] border-[#CDCDCD] border-solid border-[1.5px] pl-[21px]`}
=======
        className={`rounded-lg text-sm placeholder-bold placeholder-cir_black_03 border-cir_black_03 border-solid border-[0.094rem] pl-5`}
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        placeholder={placeholder}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  )
}
