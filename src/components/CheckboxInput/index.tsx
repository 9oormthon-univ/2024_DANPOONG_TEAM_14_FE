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
    <div className="flex items-center ml-[21px]">
      <input
        type="checkbox"
        className="w-[24px] h-[24px] mr-[8px] border-solid border-[2px] border-black"
        onChange={onChange}
        checked={checked}
      />
      <label>
        <span className="text-[14px]">{children}</span>
      </label>
    </div>
  )
}
