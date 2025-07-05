import { z } from "zod"

export const FfernFriendApiSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  id: z.string(),
  createdAt: z.number(),
})

export type FfernFriend = z.infer<typeof FfernFriendApiSchema>

export const ShippingAddressSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  addressLineOne: z.string().min(1),
  addressLineTwo: z.string().optional(),
  city: z.string(),
  postcode: z.string(),
  country: z.enum(["US", "NL", "GB"]),
})

export type ShippingAddress = z.infer<typeof ShippingAddressSchema>
