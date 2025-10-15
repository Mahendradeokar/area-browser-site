import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...string: string[]) => {
  return twMerge(clsx(string))
}
