import { useState, useEffect, useRef } from "react"
import { Control, useController } from "react-hook-form"

interface SelectOption {
  value: string
  label: string
}

interface FormSelectProps {
  name: string
  // require better typing ideally, disabling for now
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  label: string
  options: SelectOption[]
  placeholder: string
}

export const FormSelector = ({ name, control, label, options, placeholder }: FormSelectProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue: "" })

  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === field.value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 border rounded bg-white text-left"
      >
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-base">{selectedOption ? selectedOption.label : placeholder}</div>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                field.onChange(option.value)
                setIsOpen(false)
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  )
}
