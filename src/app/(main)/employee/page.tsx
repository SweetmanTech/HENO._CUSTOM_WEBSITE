import type { Metadata } from "next"
import EmployeePage from "@/components/Pages/EmployeePage"

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

const Employee = () => <EmployeePage />

export default Employee
