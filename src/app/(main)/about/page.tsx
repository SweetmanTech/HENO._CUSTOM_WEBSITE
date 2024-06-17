import type { Metadata } from "next"
import AboutPage from "@/components/Pages/AboutPage"

export const metadata: Metadata = {
  title: "HENO. ABOUT",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/about.jpeg" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. ABOUT",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/about.jpeg" }],
  },
}

const About = () => <AboutPage />

export default About
