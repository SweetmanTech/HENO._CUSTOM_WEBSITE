"use client"

import useIsMobile from "@/hooks/useIsMobile"
import Layout from "@/components/Layout"
import EmployeeContent from "./EmployeeContent"

const EmployeePage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "full"}>
      <EmployeeContent />
    </Layout>
  )
}

export default EmployeePage
