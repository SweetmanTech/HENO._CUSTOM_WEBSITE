import type { Metadata } from "next"
import ChatPage from "@/components/Pages/ChatPage"

export const metadata: Metadata = {
  title: "HENO. Employee",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/web3.jpeg" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. Employee",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/web3.jpeg" }],
  },
}

const Chat = () => <ChatPage />

export default Chat
