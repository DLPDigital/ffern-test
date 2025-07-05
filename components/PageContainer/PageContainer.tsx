interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <main className="p-4 md:p-8">
    <div className="max-w-lg mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-2">Welcome</h1>
        <p className="text-gray-600">
          To join the Ffern ledger and receive your first fragrance, please fill in your details
          below.
        </p>
      </header>
      {children}
    </div>
  </main>
)
