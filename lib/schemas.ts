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

export const ShippingAddressSchema = NameSchema.extend({
  addressLineOne: z.string().min(1, { message: "Address is required" }),
  addressLineTwo: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  postcode: z.string().min(1, { message: "Postcode is required" }),
  stateOrCounty: z.string().min(1, { message: "State or County is required" }),
  country: z.enum(["US", "NL", "GB"], {
    errorMap: () => ({ message: "Please select a country" }),
  }),
})

export type ShippingAddress = z.infer<typeof ShippingAddressSchema>

export const PostApiResponseSchema = ShippingAddressSchema.extend({
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
