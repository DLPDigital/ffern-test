import type { SVGProps } from "react"
import React from "react"

export const Burger: React.FC<SVGProps<SVGSVGElement>> = ({
  fill = "var(--color-ash-600)",
  width = 24,
  height = 24,
  ...props
}) => {
  const widthNum = Number(width)
  const heightNum = Number(height)
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path
        fill={fill}
        transform={`scale(${widthNum / 24}, ${heightNum / 24})`}
        d="M1.77734 4.35742H22.2218"
        stroke={fill}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
      <path
        fill={fill}
        transform={`scale(${widthNum / 24}, ${heightNum / 24})`}
        d="M1.77734 12.5H22.2218"
        stroke={fill}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
      <path
        fill={fill}
        transform={`scale(${widthNum / 24}, ${heightNum / 24})`}
        d="M1.77734 20.6426H22.2218"
        stroke={fill}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
    </svg>
  )
}
