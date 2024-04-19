import useArbitrumCollect from "@/hooks/useArbitrumCollect"
import { toast } from "react-toastify"

const CollectArbitrum = ({ className = "" }) => {
  const { collect, loading } = useArbitrumCollect()

  const handleClick = async () => {
    const response = await collect()
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

export default CollectArbitrum
