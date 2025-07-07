import { UseFormRegisterReturn } from "react-hook-form"

interface FormInputProps {
  id: string
  label: string
  registration: UseFormRegisterReturn
  error?: string
  isOptional?: boolean
}

export const FormInput = ({ id, label, registration, error, isOptional }: FormInputProps) => {
  const inputBaseClasses =
    "peer block w-full h-[50px] rounded px-[10px] pt-[16px] pb-[8px] border-1 focus:outline-none focus:ring-0 transition-colors border-ash-100 -ml-[1px]"

  const inputNormalClasses =
    "bg-white border-gray-300 hover:border-terracotta-200 focus:border-terracotta-200 focus:bg-sand-50"

  const inputErrorClasses = "bg-ffern-red-50 border-ffern-red-200"

  const labelBaseClasses =
    "absolute top-1/2 -translate-y-1/2 left-[10px] transition-all duration-200 ease-in-out cursor-text peer-focus:top-[8px] peer-focus:-translate-y-0 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[8px] peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:leading-[12px] text-ash-500"

  return (
    <div className="relative">
      <input
        id={id}
        {...registration}
        placeholder=" "
        className={`${inputBaseClasses} ${error ? inputErrorClasses : inputNormalClasses}`}
      />
      <label htmlFor={id} className={labelBaseClasses}>
        {label}
        {isOptional && " (optional)"}
      </label>
    </div>
  )
}
