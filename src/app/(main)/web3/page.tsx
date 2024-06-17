import type { Metadata } from "next"
import Web3Page from "@/components/Pages/Web3Page"

export const metadata: Metadata = {
  title: "HENO. WEB3",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/web3.jpeg" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. WEB3",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/web3.jpeg" }],
  },
}

const Web3 = () => <Web3Page />

export default Web3
