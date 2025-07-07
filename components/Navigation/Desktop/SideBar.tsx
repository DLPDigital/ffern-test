import { FfernLogo } from "../../SVG"
import { CountrySelectorDummy, TableDummy } from "./Dummy"
import { Bars3Icon } from "@heroicons/react/24/solid"

export const SideBar = () => (
  <div className="hidden md:block w-64 flex-shrink-0 h-screen transition-all duration-300 w-[340px] lg:w-[370px] xl:w-[380px] bg-sand-50">
    <div className="flex flex-col p-8 lg:p-12">
      <FfernLogo width={80} height={40} fill="var(--color-ash-900)" className="mb-[43px]" />
      <TableDummy />
      <hr className="my-12 border-sand-200" />
      <CountrySelectorDummy />
    </div>
   <div className="fixed top-0 right-0 p-[10px] z-50 bg-white rounded-full mt-8 mr-5 border-[rgba(0_0_0_0.85] shadow">
      <Bars3Icon className="h-8 w-8 text-nav-grey" />
    </div>
  </div>
)