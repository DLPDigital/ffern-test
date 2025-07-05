interface SuccessProps {
  firstName: string
}

export const Success = ({ firstName }: SuccessProps) => (
  <main className="p-4 md:p-8">
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-semibold mb-2">Thank You, {firstName}!</h1>
      <p className="text-gray-600">Your details have been received.</p>
    </div>
  </main>
)
