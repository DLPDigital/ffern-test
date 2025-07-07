import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

import localFont from "next/font/local"

export const covikSans = localFont({
  src: [
    {
      path: "../fonts/CovikSansDemo-Regular.woff2",
      weight: "400",
      style: "regular",
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${covikSans.className} text-[15px]`}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  )
}
