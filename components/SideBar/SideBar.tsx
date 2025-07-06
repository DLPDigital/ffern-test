import { FfernLogo } from "../SVG"
import { CountrySelectorDummy, TableDummy } from "./Dummy"

export const SideBar = () => {
  return (
    <div className="hidden md:block w-64 flex-shrink-0 h-screen w-[370px] lg:w-[380px] bg-sand-50">
      <div className="flex flex-col p-12">
        <FfernLogo width={80} height={40} fill="var(--color-ash-900)" className="mb-[43px]" />
        <TableDummy />
        <hr className="my-12 border-sand-200" />
        <CountrySelectorDummy />
      </div>
    </div>
  )
}
