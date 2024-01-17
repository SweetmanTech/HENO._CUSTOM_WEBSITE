import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useEthersSigner } from "../../../hooks/useEthersSigner"
import Trailer from "./Trailer"

const Web3Content = ({ isPopup = false }) => {
  const signer = useEthersSigner()
  return (
    <div
      className="p-[10px] border-[2px] border-gray_1 h-full 
    flex items-center justify-center flex-col gap-y-[20px]"
    >
      {signer ? <Trailer isPopup={isPopup} /> : <ConnectButton />}
    </div>
  )
}

export default Web3Content
