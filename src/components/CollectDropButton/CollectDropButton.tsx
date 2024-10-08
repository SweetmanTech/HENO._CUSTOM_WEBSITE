import { toast } from "react-toastify"
import { Address } from "viem"
import useCollectDrop from "@/hooks/useCollectDrop"

const CollectDropButton = ({
  className = "",
  address,
  tokenId,
  chainId,
}: {
  className?: string
  address: Address
  tokenId: number
  chainId: number
}) => {
  const { collect, loading } = useCollectDrop()

  const handleClick = async () => {
    const response = await collect(address, tokenId, chainId)
    if (!response) return
    toast.success("Collected!")
  }

  return (
    <button
      type="button"
      onTouchStart={handleClick}
      onClick={handleClick}
      className={`${className} bg-darkgray py-[3px] w-full`}
    >
      {loading ? `Collecting...` : "Collect"}
    </button>
  )
}

export default CollectDropButton
