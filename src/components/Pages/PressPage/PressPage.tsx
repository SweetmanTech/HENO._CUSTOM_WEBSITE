"use client"

import useIsMobile from "@/hooks/useIsMobile"
import Layout from "../../Layout"
import PressContent from "./PressContent"

const PressPage = () => {
  const isMobile = useIsMobile()
  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <PressContent />
    </Layout>
  )
}

export default PressPage
