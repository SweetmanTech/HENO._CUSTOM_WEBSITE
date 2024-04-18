import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"
import "@progress/kendo-theme-default/dist/all.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import * as React from "react"
import { Analytics } from "@vercel/analytics/react"
import Swiper, { Mousewheel } from "swiper"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import UserProvider from "@/providers/UserProvider"
import { ThemeProvider } from "../providers/ThemeProvider"
import PageLoadProvider from "../providers/PageLoadProvider"
import PopupWidgetProvider from "../providers/PopupWidgetProvider"
import Web3Provider from "../providers/Web3Provider"

Swiper.use([Mousewheel])

const privyConfig: PrivyClientConfig = {
  loginMethods: ["email", "wallet"],
  appearance: {
    theme: "dark",
    accentColor: "#FFFFFF",
    logo: "/images/Landing/music.png",
  },
  embeddedWallets: {
    createOnLogin: "all-users",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
      <UserProvider>
        <PageLoadProvider>
          <PopupWidgetProvider>
            <ThemeProvider>
              <SessionProvider>
                <Web3Provider>
                  <Component {...pageProps} />
                  <ToastContainer />
                  <Analytics />
                </Web3Provider>
              </SessionProvider>
            </ThemeProvider>
          </PopupWidgetProvider>
        </PageLoadProvider>
      </UserProvider>
    </PrivyProvider>
  )
}
export default MyApp
