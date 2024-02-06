import useIsMobile from "../../../hooks/useIsMobile"
import Web3Provider from "../../../providers/Web3Provider"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Web3Content from "./Web3Content"

const Web3Page = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. WEB3" image="/images/Landing/web3.jpeg" />
      <Web3Provider>
        <Web3Content />
      </Web3Provider>
    </Layout>
  )
}

export default Web3Page
