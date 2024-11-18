export const CheckboxInput = ({
  children,
  onChange,
  checked,
}: {
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}) => {
  return (
<<<<<<< HEAD
    <div className="flex items-center ml-[45px]">
      <input
        type="checkbox"
        className="w-[20px] h-[20px] mr-[11px] border-[1.5px] border-[#CDCDCD] rounded-[5px]"
=======
    <div className="flex items-center ml-11">
      <input
        type="checkbox"
        className="w-5  h-5 mr-3 border-[0.094rem] border-cir_black_03 rounded-md"
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
        onChange={onChange}
        checked={checked}
      />
      <label>
<<<<<<< HEAD
        <span className="text-[14px] font-bold">{children}</span>
=======
        <span className="text-sm font-bold">{children}</span>
>>>>>>> 112c5cc509eb5beb158bf564efa05fdf62554402
      </label>
    </div>
  )
}
