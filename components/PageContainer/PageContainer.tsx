import { SideBar } from "../Navigation"

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <main>
    <div className="mx-auto flex flex-col sm:flex-row h-screen">
      <SideBar />
      <div data-scrollable="true" className="flex flex-col flex-grow overflow-y-auto">
        {children}
      </div>
    </div>
  </main>
)
