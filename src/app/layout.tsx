import "@/styles/globals.css"
import "react-toastify/dist/ReactToastify.css"
import "@progress/kendo-theme-default/dist/all.css"

import * as React from "react"
import Providers from "@/providers"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
