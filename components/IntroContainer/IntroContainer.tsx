"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { FfernLogo } from "../SVG"
import { Bars3Icon } from "@heroicons/react/24/solid"

interface IntroContainerProps {
  children: React.ReactNode
}

export const IntroContainer = ({ children }: IntroContainerProps) => {
  const [isSticky, setIsSticky] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const offset = navRef.current.offsetTop
        if (window.scrollY > offset) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="grid grid-cols-1 w-full mx-auto">
      <div className="relative w-full aspect-[3/1]">
        <Image
          src="/images/header-background.png"
          alt="Header background"
          fill
          className="object-cover object-bottom-right"
        />
        <nav
          ref={navRef}
          className={`
            w-full flex items-center justify-between p-4 sm:px-16 sm:py-8 transition-all duration-300
            ${isSticky ? "fixed top-0 sm:max-w-4xl z-50 bg-sand-100 shadow-md" : "absolute top-0"}
          `}
        >
          <FfernLogo width={60} height={30} fill={isSticky ? "var(--color-ash-400)" : "white"} />
          <Bars3Icon width={23} fill={isSticky ? "var(--color-ash-400)" : "white"} />
        </nav>
      </div>
      <div className="relative mx-4 sm:mx-16 p-5 bg-sand-75 rounded -mt-[13.33%]  shadow-[2px_2px_4px_0px_#03030226]">
        {children}
        <div className="mt-15">
          <FfernLogo width={60} height={30} fill="var(--color-ash-400)" />
        </div>
      </div>
    </div>
  )
}
