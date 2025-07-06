import Image from "next/image"
import React from "react"
import { FfernLogo } from "../SVG"
import { Bars3Icon } from "@heroicons/react/24/solid"

interface IntroContainerProps {
  children: React.ReactNode
}

export const IntroContainer = ({ children }: IntroContainerProps) => (
  <div className="relative mx-auto w-full">
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
    <div className="absolute top-[60%] left-4 right-4 p-5 bg-sand-75 rounded">
      {children}
      <div className="mt-5">
        <FfernLogo width={60} height={30} fill="var(--color-ash-400)" />
      </div>
    </div>
  </div>
)
