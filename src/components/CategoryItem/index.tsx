export const CategoryItem = ({
  children,
  onClick,
  isClicked,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isClicked: boolean;
}) => {
  return (
    <div
      className={`w-20 h-7 rounded-lg ${isClicked ? "bg-dong_primary" : "bg-dong_deep_gray"} text-center flex items-center justify-center`}
      onClick={onClick}
    >
<<<<<<< HEAD
      <span className="text-[0.625rem] font-bold text-dong_white">
        {children}
      </span>
=======
      <span className="text-xs text-dong_white">{children}</span>
>>>>>>> 3f0f244672bea73d79fea755c1f5745dca0f5423
    </div>
  );
};
