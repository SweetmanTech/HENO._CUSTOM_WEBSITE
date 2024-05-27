import useIsMobile from "@/hooks/useIsMobile"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import EmployeeContent from "./EmployeeContent"

const EmployeePage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. Contact" image="/images/Landing/web3.jpeg" />
      <EmployeeContent />
    </Layout>
  )
}

export default EmployeePage
