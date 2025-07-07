import { SideBar } from "../SideBar"

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <main>
    <div className="mx-auto flex flex-col sm:flex-row h-screen">
      <SideBar />
      <div className="flex flex-col flex-grow overflow-y-auto">{children}</div>
    </div>
  </main>
)
