import { useState, Children, isValidElement, cloneElement } from "react";
import { DropdownElementProps } from "./types";

interface DropdownMenuProps {
    children: React.ReactNode;
}



export default function DropdownMenu({ children }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [selectedLabel, setSelectedLabel] = useState<string>("선택하세요");

    const handleSelect = (value: string, label: string) => {
        setSelectedValue(value);
        setSelectedLabel(label);
        setIsOpen(false);
    };

    return (
        <div className="relative w-48 text-sm">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 border rounded shadow-sm text-left bg-white"
            >
                {selectedLabel}
                <span className="float-right">▼</span>
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <div className="absolute mt-1 w-full max-h-40 overflow-y-auto border rounded shadow bg-white z-10">

                    {Children.map(children, (child) => {
                        if (!isValidElement<DropdownElementProps>(child)) return null;

                        const { value, label, disabled } = child.props;

                        return cloneElement(child, {
                            isSelected: value === selectedValue,
                            onSelect: () => {
                                if (!disabled){
                                    handleSelect(value, label);
                                    child.props.onSelect?.();
                                } 
                            },
                        });
                    })}


                </div>
            )}
        </div>
    );
}