interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <main>
    <div className="max-w-lg sm:max-w-4xl mx-auto flex flex-col min-h-screen">{children}</div>
  </main>
)
