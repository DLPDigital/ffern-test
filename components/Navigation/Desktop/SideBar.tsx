"use client"

import { useState, useEffect } from "react"
import { BurgerIcon, FfernLogo } from "../../SVG"
import { CountrySelectorDummy, TableDummy } from "./Dummy"

export const SideBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Find the scrollable container on the page
    const scrollableContainer = document.querySelector('[data-scrollable="true"]')
    if (!scrollableContainer) return

    const handleScroll = (event: Event) => {
      const target = event.currentTarget as HTMLElement
      // Check if the user has scrolled down
      if (target.scrollTop > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    scrollableContainer.addEventListener("scroll", handleScroll)

    return () => {
      scrollableContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="hidden md:block w-64 flex-shrink-0 h-screen transition-all duration-300 w-[340px] lg:w-[370px] xl:w-[380px] bg-sand-50">
      <div className="flex flex-col p-8 lg:p-12">
        <FfernLogo width={80} height={40} fill="var(--color-ash-900)" className="mb-[43px]" />
        <TableDummy />
        <hr className="my-12 border-sand-200" />
        <CountrySelectorDummy />
      </div>
      {/* Apply conditional margin and a transition */}
      <div
        className={`fixed top-0 right-0 p-[10px] pt-[6px] flex items-center justify-center z-50 bg-white rounded-full mr-5 lg:mr-9 border-[rgba(0_0_0_0.85] shadow transition-all duration-300 ease-in-out h-15 w-15 ${
          isScrolled ? "mt-5" : "mt-15"
        }`}
      >
        <BurgerIcon width={24} height={24} fill="var(--color-nav-grey)" />
      </div>
    </div>
  )
}