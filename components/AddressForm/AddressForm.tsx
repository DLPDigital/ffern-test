import { Control, FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"
import { ShippingAddress } from "@/lib/schemas"
import { countryOptions } from "@/data/countryOptions"
import { FormInput } from "../FormInput"
import { Button } from "../Button"
import { RadixDropdown } from "../RadixDropdown"

interface AddressFormProps {
  control: Control<ShippingAddress>
  register: UseFormRegister<ShippingAddress>
  handleSubmit: UseFormHandleSubmit<ShippingAddress>
  onSubmit: (data: ShippingAddress) => void
  errors: FieldErrors<ShippingAddress>
  isSubmitting: boolean
  submissionError: string | null
  isValid: boolean
}

export const AddressForm = ({
  control,
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
  submissionError,
  isValid,
}: AddressFormProps) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-sand-200 p-3 lg:p-5 rounded transition-all duration-200 ease-in-out"
    >
      {isSubmitting ? (
        <Button state={isValid ? "unlocked" : "locked"}>
          {isSubmitting ? "Sending..." : "Confirm Address"}
        </Button>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-x-[10px] gap-y-3 mb-[10px] lg:mb-3 transition-all duration-200 ease-in-out">
            <FormInput
              id="firstName"
              label="First name"
              registration={register("firstName")}
              error={errors.firstName?.message}
            />
            <FormInput
              id="lastName"
              label="Last name"
              registration={register("lastName")}
              error={errors.lastName?.message}
            />
          </div>
          <div className="mb-[10px] lg:mb-3 transition-all duration-200 ease-in-out">
            <FormInput
              id="addressLineOne"
              label="Address line 1"
              registration={register("addressLineOne")}
              error={errors.addressLineOne?.message}
            />
          </div>
          <div className="mb-[10px] lg:mb-3 transition-all duration-200 ease-in-out">
            <FormInput
              id="addressLineTwo"
              label="Address line 2"
              registration={register("addressLineTwo")}
              isOptional
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[10px] gap-y-3 mb-[10px] lg:mb-3 transition-all duration-200 ease-in-out">
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
          <div className="mb-[10px] lg:mb-3 transition-all duration-200 ease-in-out">
            <FormInput
              id="stateOrCounty"
              label="State / County"
              registration={register("stateOrCounty")}
              error={errors.stateOrCounty?.message}
            />
          </div>
          <div className="mb-[10px] lg:mb-3 transition-all duration-200 ease-in-out">
            <RadixDropdown
              name="country"
              control={control}
              label="Country"
              options={countryOptions}
            />
          </div>
          <Button state={isValid ? "unlocked" : "locked"}>
            {isSubmitting ? "Sending..." : "Confirm Address"}
          </Button>
          {submissionError && (
            <p className="text-ffern-red-200 text-sm mt-2 text-center">{submissionError}</p>
          )}
        </>
      )}
    </form>
  )
}
