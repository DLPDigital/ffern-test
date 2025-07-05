import { Control, FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"
import { ShippingAddress } from "@/lib/schemas"
import { countryOptions } from "@/data/countryOptions"
import { FormInput } from "../FormInput"
import { FormSelector } from "../FormSelector"

interface AddressFormProps {
  control: Control<ShippingAddress>
  register: UseFormRegister<ShippingAddress>
  handleSubmit: UseFormHandleSubmit<ShippingAddress>
  onSubmit: (data: ShippingAddress) => void
  errors: FieldErrors<ShippingAddress>
  isSubmitting: boolean
  submissionError: string | null
}

export const AddressForm = ({
  control,
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
  submissionError,
}: AddressFormProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <FormInput
          id="firstName"
          label="First Name"
          registration={register("firstName")}
          error={errors.firstName?.message}
        />
        <FormInput
          id="lastName"
          label="Last Name"
          registration={register("lastName")}
          error={errors.lastName?.message}
        />
      </div>
      <div className="mb-4">
        <FormInput
          id="addressLineOne"
          label="Address Line 1"
          registration={register("addressLineOne")}
          error={errors.addressLineOne?.message}
        />
      </div>
      <div className="mb-4">
        <FormInput
          id="addressLineTwo"
          label="Address Line 2"
          registration={register("addressLineTwo")}
          isOptional
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <FormInput
          id="city"
          label="City"
          registration={register("city")}
          error={errors.city?.message}
        />
        <FormInput
          id="postcode"
          label="Postcode"
          registration={register("postcode")}
          error={errors.postcode?.message}
        />
      </div>
      <div className="mb-4">
        <FormInput
          id="stateOrCounty"
          label="State / County"
          registration={register("stateOrCounty")}
          error={errors.stateOrCounty?.message}
        />
      </div>
      <div className="mb-4">
        <FormSelector
          name="country"
          control={control}
          label="Country"
          options={countryOptions}
          placeholder="Select your country"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded disabled:bg-gray-400 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join the ledger"}
      </button>
      {submissionError && (
        <p className="text-red-500 text-sm mt-2 text-center">{submissionError}</p>
      )}
    </form>
  )
}
