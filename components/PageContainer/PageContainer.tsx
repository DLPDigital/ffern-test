interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <main>
    <div className="max-w-lg mx-auto flex flex-col min-h-screen">{children}</div>
  </main>
)
