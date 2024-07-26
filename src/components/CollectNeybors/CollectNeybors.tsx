import use721Collect from "@/hooks/useCollect721"
import { IS_TESTNET, NEYBORS_DROP_ADDRESS } from "@/lib/consts"
import { toast } from "react-toastify"
import { mainnet, sepolia } from "viem/chains"

const CollectNeybors = ({ className = "" }) => {
  const { collect721, loading } = use721Collect()

  const handleClick = async () => {
    const chainId = IS_TESTNET ? sepolia.id : mainnet.id
    const response = await collect721(NEYBORS_DROP_ADDRESS, chainId)
    if (!response) return
    toast.success("Collected!")
  }

  return (
    <button
      type="button"
      className={`${className} bg-darkgray py-[3px]`}
      onClick={handleClick}
      onTouchStart={handleClick}
      disabled={loading}
    >
      {loading ? `Collecting...` : "Collect"}
    </button>
  )
}

export default CollectNeybors
