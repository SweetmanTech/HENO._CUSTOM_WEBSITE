"use client"

import useIsMobile from "@/hooks/useIsMobile"
import Layout from "../../Layout"
import MusicContent from "./MusicContent"

const MusicPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <MusicContent />
    </Layout>
  )
}

export default MusicPage
