"use client"

import { useState, useEffect, useRef } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { FfernLogo } from "@/components/SVG"

export const MobileNav = () => {
  const [isSticky, setIsSticky] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const navElement = navRef.current
    if (!navElement) return

    const scrollableContainer = navElement.closest('[data-scrollable="true"]')
    if (!scrollableContainer) return

    const handleScroll = (event: Event) => {
      const target = event.currentTarget as HTMLElement
      if (target.scrollTop > 10) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    scrollableContainer.addEventListener("scroll", handleScroll)

    return () => {
      scrollableContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className={`
        w-full flex items-center justify-between p-4 sm:px-16 sm:py-8 transition-all duration-300 md:hidden
        ${isSticky ? "fixed top-0 sm:max-w-4xl z-50 bg-sand-100 shadow-md" : "absolute top-0"}
      `}
    >
      <FfernLogo width={60} height={30} fill={isSticky ? "var(--color-ash-400)" : "white"} />
      <Bars3Icon width={23} fill={isSticky ? "var(--color-ash-400)" : "white"} />
    </nav>
  )
}
