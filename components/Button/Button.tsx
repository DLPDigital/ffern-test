import React from "react"
import { ChevronRightIcon, LockClosedIcon } from "@heroicons/react/24/solid"

type ButtonVariant = "primary" | "secondary" | "tertiary" | "quaternary" | "quinary"
type ButtonState = "unlocked" | "locked"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  state: ButtonState
  children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-terracotta-300 text-white",
  secondary: "bg-gray-200 text-black",
  tertiary: "bg-blue-500 text-white",
  quaternary: "bg-green-500 text-white",
  quinary: "bg-yellow-400 text-black",
}

export const Button = ({ variant, state, children, ...props }: ButtonProps) => {
  const Icon = state === "locked" ? LockClosedIcon : ChevronRightIcon

  return (
    <button
      {...props}
      className={`
        flex items-center justify-between w-full px-4 py-2 rounded
        font-semibold text-left transition-colors
        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${props.className || ""}
      `}
    >
      <span>{children}</span>
      <Icon className="h-5 w-5" />
    </button>
  )
}
