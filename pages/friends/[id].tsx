import { GetServerSideProps } from "next/types"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import {
  FfernFriendApiSchema,
  ShippingAddressSchema,
  type FfernFriend,
  type ShippingAddress,
} from "@/lib/schemas"

interface FfernFriendPageProps {
  initialData: FfernFriend;
  id: string;
}

const fetchFfernFriend = async (id: string): Promise<FfernFriend> => {
  const username = process.env.NEXT_PUBLIC_API_USERNAME!
  const password = process.env.NEXT_PUBLIC_API_PASSWORD!
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
  console.log("data = ", data)
  return FfernFriendApiSchema.parse(data)
}

const FfernFriendPage = ({ initialData, id }: FfernFriendPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ShippingAddress>({
    resolver: zodResolver(ShippingAddressSchema),
  })

  const { data, isError, error } = useQuery({
    queryKey: ["ffernFriend", id],
    queryFn: () => fetchFfernFriend(id),
    initialData: initialData,
  })

  useEffect(() => {
    if (data) {
      reset({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
      })
    }
  }, [data, reset])

  const onSubmit = (data: ShippingAddress) => {
    console.log("Form submitted:", data)
  }

  if (isError) return <div>Error {error.message}</div>

  return (
    <main className="p-4 md:p-8">
      <div className="max-w-lg mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Welcome to Ffern, {data?.firstName}</h1>
          <p className="text-gray-600">
            To join the Ffern ledger and receive your first fragrance, please fill in your details
            below.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                id="firstName"
                {...register("firstName")}
                className="w-full p-2 border rounded"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                {...register("lastName")}
                className="w-full p-2 border rounded"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="address1" className="block mb-1">
              Address
            </label>
            <input
              id="address1"
              {...register("addressLineOne")}
              className="w-full p-2 border rounded"
            />
            {errors.addressLineOne && (
              <p className="text-red-500 text-sm mt-1">{errors.addressLineOne.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="addressLineTwo" className="block mb-1">
              Apartment, suite, etc. (optional)
            </label>
            <input
              id="addressLineTwo"
              {...register("addressLineTwo")}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block mb-1">
                City
              </label>
              <input id="city" {...register("city")} className="w-full p-2 border rounded" />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            <div>
              <label htmlFor="postcode" className="block mb-1">
                Postcode
              </label>
              <input
                id="postcode"
                {...register("postcode")}
                className="w-full p-2 border rounded"
              />
              {errors.postcode && (
                <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block mb-1">
              Country
            </label>
            <select
              id="country"
              {...register("country")}
              className="w-full p-2 border rounded bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select your country
              </option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="NL">Netherlands</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
            )}
          </div>

          <button type="submit" className="w-full bg-black text-white p-3 rounded">
            Join the ledger
          </button>
        </form>
      </div>
    </main>
  )
}

export default FfernFriendPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;

  if (!id) {
    return { notFound: true };
  }

  try {
    const initialData = await fetchFfernFriend(id);
    return {
      props: {
        initialData,
        id,
      },
    };
  } catch (error) {
    console.error("Failed to fetch Ffern Friend data:", error);
    return { notFound: true };
  }
};