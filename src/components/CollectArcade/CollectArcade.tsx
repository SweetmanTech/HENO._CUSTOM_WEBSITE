import use721Collect from "@/hooks/useCollect721"
import { ARCADE_DROP_ADDRESS, IS_TESTNET } from "@/lib/consts"
import { toast } from "react-toastify"
import { sepolia, zora } from "viem/chains"

const CollectArcade = ({ className = "" }) => {
  const { collect721, loading } = use721Collect()

  const handleClick = async () => {
    const chainId = IS_TESTNET ? sepolia.id : zora.id
    const response = await collect721(ARCADE_DROP_ADDRESS, chainId)
    if (!response) return
    toast.success("Collected!")
  }

  return (
    <button
      type="button"
      className={`${className} bg-darkgray py-[3px] w-full`}
      onClick={handleClick}
      onTouchStart={handleClick}
      disabled={loading}
    >
      {loading ? `Collecting...` : "Collect"}
    </button>
  )
}

export default CollectArcade
