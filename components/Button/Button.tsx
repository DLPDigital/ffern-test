import React from "react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { PadlockIcon } from "../SVG"

type ButtonState = "unlocked" | "locked"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: ButtonState
  children: React.ReactNode
}

export const Button = ({ state, children }: ButtonProps) => {
  const isDisabled = state === "locked"
  const Icon = isDisabled ? PadlockIcon : ChevronRightIcon

  const baseClasses =
    "flex items-center justify-between w-full p-5 rounded-[5px] text-left h-[60px] transition-colors duration-300 ease-in-out sm:max-w-xs mx-auto"

  const unlockedClasses = "bg-terracotta-300 text-white"

  const lockedClasses = "bg-ash-300 text-ash-500 cursor-not-allowed"

  return (
    <button
      disabled={isDisabled}
      className={`${baseClasses} ${isDisabled ? lockedClasses : unlockedClasses}`}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4" />
    </button>
  )
}