"use client"

import useIsMobile from "@/hooks/useIsMobile"
import Layout from "../../Layout"
import Web3Content from "./Web3Content"

const Web3Page = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <Web3Content />
    </Layout>
  )
}

export default Web3Page
