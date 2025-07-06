import { ChevronDownIcon } from "@heroicons/react/24/solid"
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
}

export const FormSelector = ({ name, control, label, options }: FormSelectProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue: "" })

  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === field.value)

  const baseClasses =
    "block w-full h-[50px] rounded px-[10px] pt-[16px] pb-[8px] border-2 focus:outline-none focus:ring-0 transition-colors text-left"

  const normalClasses = "bg-white border-gray-300 hover:border-terracotta-200"

  const errorClasses = "bg-ffern-red-50 border-ffern-red-200"

  const isFloated = isOpen || !!field.value

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
      <label
        htmlFor={name}
        className={`
          absolute left-[10px] transition-all duration-200 ease-in-out cursor-pointer
          ${isFloated ? "top-[8px] -translate-y-0 text-[10px]" : "top-1/2 -translate-y-1/2 text-[15px]"}
          ${error ? "text-ffern-red-200" : "text-ash-500"}
        `}
      >
        {label}
      </label>

      <button
        id={name}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${baseClasses}
          ${error ? errorClasses : normalClasses}
          ${isOpen && !error ? "border-terracotta-200 bg-sand-50" : ""}
        `}
      >
        <span className="block truncate">{selectedOption ? selectedOption.label : ""}</span>
        <ChevronDownIcon
          className={`absolute top-1/2 -translate-y-1/2 right-[10px] h-5 w-5 text-ash-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-terracotta-200 rounded shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                field.onChange(option.value)
                setIsOpen(false)
              }}
              className="px-4 py-2 hover:bg-sand-50 cursor-pointer border-b border-ash-200"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
