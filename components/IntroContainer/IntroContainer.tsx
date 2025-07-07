import Image from "next/image"
import { FfernLogo } from "../SVG"
import { MobileNav } from "../Navigation"

interface IntroContainerProps {
  children: React.ReactNode
}

export const IntroContainer = ({ children }: IntroContainerProps) => {
  return (
    <div className="grid grid-cols-1 w-full mx-auto bg-sand-50">
      <div className="relative w-full aspect-[390/140]">
        <Image
          src="/images/header-background.png"
          alt="Header background"
          fill
          className="object-cover object-bottom-right"
        />
        <MobileNav />
      </div>
      <div className="relative mx-5 sm:mx-16 md:mx-12 p-5 pb-4 md:p-7 lg:p-12 transition-all duration-200 ease-in-out bg-sand-75 rounded -mt-[15.6%] md:-mt-[25%] shadow-[2px_2px_4px_0px_#03030226] md:max-w-[800px] justify-self-center">
        {children}
        <div className="mt-14">
          <FfernLogo width={50} height={25} fill="var(--color-ash-400)" />
        </div>
      </div>
    </div>
  )
}
