import { z } from "zod"

const NameSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
})

export const FfernFriendApiSchema = NameSchema.extend({
  id: z.string(),
  createdAt: z.number().int().positive(),
})

export type FfernFriend = z.infer<typeof FfernFriendApiSchema>

export const BaseShippingAddressSchema = NameSchema.extend({
  addressLineOne: z.string().trim().min(1, { message: "Address is required" }),
  addressLineTwo: z.string().trim().optional(),
  city: z.string().trim().min(1, { message: "City is required" }),
  postcode: z.string().trim().min(1, { message: "Postcode is required" }),
  stateOrCounty: z.string().trim().min(1, { message: "State or County is required" }),
  country: z.enum(["US", "NL", "GB"], {
    errorMap: () => ({ message: "Please select a country" }),
  }),
})

export const ShippingAddressSchema = BaseShippingAddressSchema.superRefine((data, ctx) => {
  const usZipRegex = /^\d{5}(-\d{4})?$/
  const gbPostcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i
  const nlPostcodeRegex = /^[1-9][0-9]{3} ?[A-Z]{2}$/i

  let isValid = true
  let errorMessage = ""
  switch (data.country) {
    case "US":
      if (!usZipRegex.test(data.postcode)) {
        isValid = false
        errorMessage = "Please enter a valid 5 or 9-digit ZIP code"
      }
      break
    case "GB":
      if (!gbPostcodeRegex.test(data.postcode)) {
        isValid = false
        errorMessage = "Please enter a valid UK postcode (e.g., SW1A 0AA)"
      }
      break
    case "NL":
      if (!nlPostcodeRegex.test(data.postcode)) {
        isValid = false
        errorMessage = "Please enter a valid NL postcode (e.g., 1012 AB)"
      }
      break
  }

  if (!isValid) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: errorMessage,
      path: ["postcode"],
    })
  }
})

export type ShippingAddress = z.infer<typeof ShippingAddressSchema>

export const PostApiResponseSchema = BaseShippingAddressSchema.extend({
  id: z.string(),
  createdAt: z.number().int().positive(),
  updatedAt: z.number().int().positive(),
  subscribedAt: z.number().int().positive(),
})
export type PostApiResponse = z.infer<typeof PostApiResponseSchema>

export const ApiErrorSchema = z.object({
  error: z.string(),
  message: z.string(),
})
