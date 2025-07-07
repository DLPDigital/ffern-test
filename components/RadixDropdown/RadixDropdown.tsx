import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { Control, useController } from "react-hook-form"
import * as Select from "@radix-ui/react-select"
import { covikSans } from "@/pages/_app"

interface SelectOption {
  value: string
  label: string
}

interface RadixDropdownProps {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  label: string
  options: SelectOption[]
}

export const RadixDropdown = ({ name, control, label, options }: RadixDropdownProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue: "" })

  const [isOpen, setIsOpen] = useState(false)

  const baseClasses =
    "block w-full h-[50px] rounded px-[10px] pt-[16px] pb-[8px] border-2 focus:outline-none focus:ring-0 transition-colors text-left"
  const errorClasses = "bg-ffern-red-50 border-ffern-red-200"
  const normalClasses =
    "bg-white border-gray-300 hover:border-terracotta-200 data-[state=open]:bg-sand-50 data-[state=open]:border-terracotta-200"

  const isFloated = isOpen || !!field.value

  return (
    <Select.Root
      value={field.value}
      onValueChange={field.onChange}
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <div className="relative">
        <label
          htmlFor={name}
          className={`
            absolute left-[10px] transition-all duration-200 ease-in-out z-10 pointer-events-none
            ${isFloated ? "top-[8px] -translate-y-0 text-[10px]" : "top-1/2 -translate-y-1/2 "}
            ${error ? "text-ffern-red-200" : "text-ash-500"}
          `}
        >
          {label}
        </label>

        <Select.Trigger
          id={name}
          className={`${baseClasses} ${error ? errorClasses : normalClasses}`}
        >
          <span className="block truncate -ml-[1px] ">
            <Select.Value placeholder=" " />
          </span>
          <Select.Icon className="absolute top-1/2 -translate-y-1/2 right-[10px]">
            <ChevronDownIcon
              className={`h-5 w-5 text-ash-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={5}
            className="z-20 w-[var(--radix-select-trigger-width)] mt-1 bg-white border border-terracotta-200 rounded shadow-lg max-h-60 overflow-auto font-covik"
          >
            <Select.Viewport>
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className={`${covikSans.className} px-4 py-2 hover:bg-sand-50 cursor-pointer border-b border-ash-200 outline-none`}
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  )
}
