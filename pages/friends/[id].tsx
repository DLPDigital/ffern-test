import { useEffect, useState } from "react"
import { GetServerSideProps } from "next/types"
import Head from "next/head"

import { useMutation, useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { fetchFfernFriend, postShippingAddress } from "@/lib/api"
import { ShippingAddressSchema, type ShippingAddress } from "@/lib/schemas"
import { FfernFriendPageProps } from "@/lib/types"

import { Success } from "@/components/Success"
import { PageContainer } from "@/components/PageContainer/PageContainer"
import { AddressForm } from "@/components/AddressForm"
import { IntroContainer } from "@/components/IntroContainer"
import { IntroContent } from "@/components/IntroContent/IntroContent"
import { DummyFooter } from "@/components/DummyFooter/DummyFooter"

const FfernFriendPage = ({ initialData, id }: FfernFriendPageProps) => {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
  } = useForm<ShippingAddress>({
    resolver: zodResolver(ShippingAddressSchema),
    mode: "onTouched",
    defaultValues: {
      country: "GB",
    },
  })

  const { data, isError, error } = useQuery({
    queryKey: ["ffernFriend", id],
    queryFn: () => fetchFfernFriend(id),
    initialData: initialData,
    // Adding an infinite stale time to prevent the app trying to refetch data on the client and exposing the API keys to the browser
    staleTime: Infinity,
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

  return (
    <>
      <Head>
        <title>Welcome to Ffern{data?.firstName ? `, ${data.firstName}` : ""}</title>
        <meta
          name="description"
          content="Join the Ffern ledger. Fill in your details to receive your first fragrance."
        />
      </Head>
      <PageContainer>
        <IntroContainer>
          <IntroContent firstName={data?.firstName ?? ""} />
          {isSuccess ? (
            <Success />
          ) : (
            <AddressForm
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              control={control}
              errors={errors}
              isSubmitting={mutation.isPending}
              submissionError={mutation.isError ? mutation.error.message : null}
              isValid={isValid}
            />
          )}
        </IntroContainer>
        <DummyFooter />
      </PageContainer>
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
