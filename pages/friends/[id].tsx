import { useEffect, useState } from "react"
import { GetServerSideProps } from "next/types"
import { fetchFfernFriend, postShippingAddress } from "@/lib/api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ShippingAddressSchema, type ShippingAddress } from "@/lib/schemas"
import { Success } from "@/components/Success"
import Head from "next/head"
import { FfernFriendPageProps } from "@/lib/types"
import { AddressForm } from "@/components/AddressForm"

const FfernFriendPage = ({ initialData, id }: FfernFriendPageProps) => {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ShippingAddress>({
    resolver: zodResolver(ShippingAddressSchema),
  })

  const { data, isError, error } = useQuery({
    queryKey: ["ffernFriend", id],
    queryFn: () => fetchFfernFriend(id),
    initialData: initialData,
  })

  const mutation = useMutation({
    mutationFn: postShippingAddress,
    onSuccess: () => {
      setIsSuccess(true)
    },
  })

  useEffect(() => {
    if (data) {
      reset({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
      })
    }
  }, [data, reset])

  const onSubmit = (formData: ShippingAddress) => {
    console.log("Form submitted:", formData)
    mutation.mutate({ id, data: formData })
  }

  if (isError) return <div>Error {error.message}</div>

  if (isSuccess) {
    return <Success firstName={data?.firstName ?? ""} />
  }

  return (
    <>
      <Head>
        <title>Welcome to Ffern{data?.firstName ? `, ${data.firstName}` : ""}</title>
        <meta
          name="description"
          content="Join the Ffern ledger. Fill in your details to receive your first fragrance."
        />
      </Head>
      <main className="p-4 md:p-8">
        <div className="max-w-lg mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-2">
              Welcome to Ffern{data?.firstName ? `, ${data.firstName}` : ""}
            </h1>
            <p className="text-gray-600">
              To join the Ffern ledger and receive your first fragrance, please fill in your details
              below.
            </p>
          </header>
          <AddressForm
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            control={control}
            errors={errors}
            isSubmitting={mutation.isPending}
            submissionError={mutation.isError ? mutation.error.message : null}
          />
        </div>
      </main>
    </>
  )
}

export default FfernFriendPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string
  if (!id) {
    return { notFound: true }
  }

  try {
    const initialData = await fetchFfernFriend(id)
    return {
      props: {
        initialData,
        id,
      },
    }
  } catch (error) {
    console.error("Failed to fetch Ffern Friend data:", error)
    return { notFound: true }
  }
}
