"use client"

import useIsMobile from "@/hooks/useIsMobile"
import Layout from "../../Layout"
import AboutContent from "./AboutContent"

const AboutPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <AboutContent />
    </Layout>
  )
}

export default AboutPage
