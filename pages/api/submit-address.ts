import type { NextApiRequest, NextApiResponse } from "next"
import { ShippingAddressSchema } from "@/lib/schemas"
import { ZodError } from "zod"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  try {
    const { id, data } = req.body
    const validatedData = ShippingAddressSchema.parse(data)

    const username = process.env.API_USERNAME!
    const password = process.env.API_PASSWORD!
    const encoded = Buffer.from(`${username}:${password}`).toString("base64")

    const apiResponse = await fetch(`https://ffern-custodian.vercel.app/api/ffern-friends/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + encoded,
      },
      body: JSON.stringify(validatedData),
    })

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.json()
      return res.status(apiResponse.status).json(errorBody)
    }

    const responseData = await apiResponse.json()
    return res.status(200).json(responseData)
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ message: "Invalid data provided.", errors: error.errors });
    }
    return res.status(500).json({ message: "An unexpected error occurred." });
  }
}
