import React from "react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { PadlockIcon } from "../SVG"

type ButtonState = "unlocked" | "locked"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: ButtonState
  children: React.ReactNode
}

export const Button = ({ state, children }: ButtonProps) => {
  const Icon = state === "locked" ? PadlockIcon : ChevronRightIcon
  const buttonClass =
    "flex items-center justify-between w-full p-5 rounded-[5px] text-left h-[60px] transition-colors duration-300 ease-in-out"
  return (
    <button
      className={`${buttonClass} ${state === "locked" ? "bg-ash-300 text-ash-500" : "bg-terracotta-300 text-white"}`}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4" />
    </button>
  )
}
