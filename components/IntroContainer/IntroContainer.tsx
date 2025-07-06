import Image from "next/image"
import React from "react"
import { FfernLogo } from "../SVG"
import { Bars3Icon } from "@heroicons/react/24/solid"

interface IntroContainerProps {
  children: React.ReactNode
}

export const IntroContainer = ({ children }: IntroContainerProps) => (
  <div className="grid grid-cols-1 w-full max-w-[800px] mx-auto">
    <div className="relative w-full aspect-[3/1]">
      <Image
        src="/images/header-background.png"
        alt="Header background"
        fill
        className="object-cover object-bottom-right"
      />
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
        <FfernLogo width={60} height={30} fill="white" />
        <Bars3Icon width={23} fill="white" />
      </nav>
    </div>
    <div className="relative mx-4 p-5 bg-sand-75 rounded -mt-[13.33%]  shadow-[2px_2px_4px_0px_#03030226]">
      {children}
      <div className="mt-15">
        <FfernLogo width={60} height={30} fill="var(--color-ash-400)" />
      </div>
    </div>
  </div>
)
