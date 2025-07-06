import {
  ApiErrorSchema,
  FfernFriend,
  FfernFriendApiSchema,
  PostApiResponseSchema,
  ShippingAddress,
} from "./schemas"

export const fetchFfernFriend = async (id: string): Promise<FfernFriend> => {
  const username = process.env.API_USERNAME!
  const password = process.env.API_PASSWORD!
  const encoded = Buffer.from(`${username}:${password}`).toString("base64")

  const response = await fetch(`https://ffern-custodian.vercel.app/api/ffern-friends/${id}`, {
    headers: {
      Authorization: "Basic " + encoded,
    },
  })

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  const data = await response.json()
  return FfernFriendApiSchema.parse(data)
}

export const postShippingAddress = async ({ id, data }: { id: string; data: ShippingAddress }) => {
  const response = await fetch(`/api/submit-address`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, data }),
  })

  if (!response.ok) {
    try {
      const errorData = await response.json()
      const parsedError = ApiErrorSchema.safeParse(errorData)
      if (parsedError.success) {
        throw new Error(parsedError.data.message)
      }
    } catch {}
    throw new Error("Sorry, we couldn't submit your details. Please try again.")
  }

  const responseData = await response.json()
  return PostApiResponseSchema.parse(responseData)
}
