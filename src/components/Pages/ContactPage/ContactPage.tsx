"use client"

import useIsMobile from "../../../hooks/useIsMobile"
import Layout from "../../Layout"
import ContactContent from "./ContactContent"

const ContactPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <ContactContent />
    </Layout>
  )
}

export default ContactPage
