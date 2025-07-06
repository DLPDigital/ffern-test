import React from "react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { PadlockIcon } from "../SVG"

type ButtonState = "unlocked" | "locked"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: ButtonState
  children: React.ReactNode
}

export const Button = ({  state, children, ...props }: ButtonProps) => {
  const Icon = state === "locked" ? PadlockIcon : ChevronRightIcon

  return (
    <button
      {...props}
      className={`
        flex items-center justify-between w-full p-5 rounded-[5px]
        text-left h-[60px] 
      ${state === "locked" ? "bg-ash-300 text-ash-500" : "bg-terracotta-300 text-white"}
      `}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4" />
    </button>
  )
}
