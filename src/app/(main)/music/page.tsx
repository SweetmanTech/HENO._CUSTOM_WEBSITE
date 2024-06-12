import type { Metadata } from "next"
import MusicPage from "@/components/Pages/MusicPage"

export const metadata: Metadata = {
  title: "HENO. MUSIC",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/music.png" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. MUSIC",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/music.png" }],
  },
}

const Music = () => <MusicPage />

export default Music
