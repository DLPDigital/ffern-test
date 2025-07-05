import { UseFormRegisterReturn } from "react-hook-form"

interface FormInputProps {
  id: string
  label: string
  registration: UseFormRegisterReturn
  error?: string
  isOptional?: boolean
}

export const FormInput = ({ id, label, registration, error, isOptional }: FormInputProps) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      id={id}
      {...registration}
      placeholder={`${label}${isOptional ? " (optional)" : ""}`}
      className={`
          block w-full px-3 py-2 bg-transparent border-2
          placeholder-gray-400
          focus:outline-none focus:ring-0
          ${error ? "border-red-500" : "border-gray-300 focus:border-black"}
        `}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
)
