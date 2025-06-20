import { DropdownElementProps } from "./types";


export default function DropdownElement({
  label,
  disabled,
  isSelected,
  onSelect,
}: DropdownElementProps) {
  return (
    <div
      onClick={disabled ? undefined : onSelect}
      className={`
        px-4 py-2 cursor-pointer
        ${disabled ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}
        ${isSelected ? "bg-gray-100 font-semibold" : ""}
      `}
    >
      {label}
    </div>
  );
}