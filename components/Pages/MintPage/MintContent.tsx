import { ConnectButton } from "@rainbow-me/rainbowkit"
import MintButton from "../../MintButton"
import { useEthersSigner } from "../../../hooks/useEthersSigner"

const MintContent = () => {
  const signer = useEthersSigner()
  return (
    <div className="p-[10px] border-[2px] border-gray_1 h-full flex items-center justify-center flex-col gap-y-[20px]">
      {signer ? <MintButton /> : <ConnectButton />}
    </div>
  )
}

export default MintContent
