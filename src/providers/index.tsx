"use client"

import * as React from "react"
import { ToastContainer } from "react-toastify"
import Swiper, { Mousewheel } from "swiper"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import UserProvider from "@/providers/UserProvider"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "./ThemeProvider"
import PageLoadProvider from "./PageLoadProvider"
import PopupWidgetProvider from "./PopupWidgetProvider"
import Web3Provider from "./Web3Provider"

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

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
      <UserProvider>
        <PageLoadProvider>
          <PopupWidgetProvider>
            <ThemeProvider>
              <Web3Provider>
                {children}
                <ToastContainer />
                <Analytics />
              </Web3Provider>
            </ThemeProvider>
          </PopupWidgetProvider>
        </PageLoadProvider>
      </UserProvider>
    </PrivyProvider>
  )
}
