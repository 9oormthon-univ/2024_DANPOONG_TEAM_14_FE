export const TypeSelectItem = ({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode
  selected: boolean
  onClick: () => void
}) => {
  const changeEng = ({ children }: { children: React.ReactNode }): string => {
    if (children === "장애인") {
      return "Disabled person"
    } else if (children === "임산부") {
      return "Pregnant woman"
    } else if (children === "노약자") {
      return "Elderly person"
    } else if (children === "어린이") {
      return "Child"
    }

    return "unknown"
  }

  const makeDesc = ({
    children,
  }: {
    children: React.ReactNode
  }): React.ReactNode => {
    if (children === "장애인") {
      return (
        <>
          물리적, 사회적 장벽으로 인해
          <br />
          일상생활과 사회 참여에 어려움을 겪어요
        </>
      )
    } else if (children === "임산부") {
      return (
        <>
          신체적 변화와 건강상의 위험으로
          <br />
          인해 이동과 생활에 불편함을 겪어요.
        </>
      )
    } else if (children === "노약자") {
      return (
        <>
          체력 저화와 건강 문제로
          <br />
          인해 일상활동에 제약이 있어요.
        </>
      )
    } else if (children === "어린이") {
      return (
        <>
          신체적, 정신적 발달 단계에
          <br />
          있어 보호와 지도가 필요해요.
        </>
      )
    }

    return null
  }

  return (
    <div
      className={`w-[300px] h-[90px] rounded-[10px] border-2 ${
        selected ? "bg-[#FFD332]" : "bg-[#CDCDCD]"
      } border-solid hover:border-[#FFD332] cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`text-[#ffffff] rounded-[10px] ${
          selected ? "bg-[#FFD332]" : "bg-[#CDCDCD]"
        } flex flex-col h-full pt-[20px] pl-[31px] hover:border-[#FFD332] cursor-pointer`}
        onClick={onClick}
      >
        <span className="text-[14px] font-bold mb-[4px]">
          {children}
          <span className="text-[6px] ml-[4px]">{changeEng({ children })}</span>
        </span>
        <span className="text-[10px] font-medium">
          {makeDesc({ children })}
        </span>
      </div>
    </div>
  )
}
