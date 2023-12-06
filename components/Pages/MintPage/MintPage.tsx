import { ConnectButton } from "@rainbow-me/rainbowkit"
import MintButton from "../../MintButton"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import { useEthersSigner } from "../../../hooks/useEthersSigner"

const MintPage = () => {
  const signer = useEthersSigner()

  return (
    <Layout type="base">
      <SeoHead title="HENO.MINT" image="/images/Landing/webThree.jpg" />
      <div className="p-[10px] border-[2px] border-[#d2d2d2] h-full flex items-center justify-center flex-col gap-y-[20px]">
        {signer ? <MintButton /> : <ConnectButton />}
      </div>
    </Layout>
  )
}

export default MintPage
