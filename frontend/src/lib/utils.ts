import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge"; // ✅ 이게 정확한 import

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}