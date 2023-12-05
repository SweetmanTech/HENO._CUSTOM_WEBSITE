import { ConnectButton } from "@rainbow-me/rainbowkit"
import MintButton from "../../MintButton"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"

const MintPage = () => (
  <Layout type="base">
    <SeoHead title="Mint" />
    <div className="p-[10px] border-[2px] border-[#d2d2d2] h-full flex items-center justify-center flex-col gap-y-[20px]">
      <ConnectButton />
      <MintButton />
    </div>
  </Layout>
)

export default MintPage
