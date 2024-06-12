import type { Metadata } from "next"
import LandingPage from "@/components/Pages/LandingPage"

export const metadata: Metadata = {
  title: "HENO. HOME",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/about.jpeg" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. HOME",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/about.jpeg" }],
  },
}

const Home = () => <LandingPage />

export default Home
