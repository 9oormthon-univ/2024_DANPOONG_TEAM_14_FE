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
    <div className="flex items-center ml-[45px]">
      <input
        type="checkbox"
        className="w-[20px] h-[20px] mr-[11px] border-[1.5px] border-[#CDCDCD] rounded-[5px]"
        onChange={onChange}
        checked={checked}
      />
      <label>
        <span className="text-[14px] font-bold">{children}</span>
      </label>
    </div>
  )
}
