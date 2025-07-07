import Image from "next/image"
import { FfernLogo } from "../SVG"
import { MobileNav } from "../Navigation"

interface IntroContainerProps {
  children: React.ReactNode
}

export const IntroContainer = ({ children }: IntroContainerProps) => {
  return (
    <div className="grid grid-cols-1 w-full mx-auto">
      <div className="relative w-full aspect-[3/1]">
        <Image
          src="/images/header-background.png"
          alt="Header background"
          fill
          className="object-cover object-bottom-right"
        />
        <MobileNav />
      </div>
      <div className="relative mx-4 sm:mx-16 p-5 bg-sand-75 rounded -mt-[13.33%] md:-mt-[25%] shadow-[2px_2px_4px_0px_#03030226] md:max-w-[800px] justify-self-center">
        {children}
        <div className="mt-15">
          <FfernLogo width={60} height={30} fill="var(--color-ash-400)" />
        </div>
      </div>
    </div>
  )
}
