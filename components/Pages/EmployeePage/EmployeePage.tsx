import useIsMobile from "@/hooks/useIsMobile"
import Layout from "@/components/Layout"
import SeoHead from "@/components/SeoHead"
import EmployeeContent from "./EmployeeContent"

const EmployeePage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. Employee" image="/images/Landing/web3.jpeg" />
      <EmployeeContent />
    </Layout>
  )
}

export default EmployeePage
