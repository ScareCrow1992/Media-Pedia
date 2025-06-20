export interface DropdownElementProps {
  label: string;
  value: string;
  disabled?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
}