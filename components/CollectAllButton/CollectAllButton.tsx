import { toast } from "react-toastify"
import useZoraCollectAll from "@/hooks/useZoraCollectAll"

const CollectAllButton = ({ className = "" }) => {
  const { collect, loading } = useZoraCollectAll()

  const handleClick = async () => {
    const response = await collect()
    if (!response) return
    toast.success("Collected!")
  }

  return (
    <button
      type="button"
      onTouchStart={handleClick}
      onClick={handleClick}
      className={`${className} bg-darkgray py-[3px] w-full`}
      disabled={loading}
    >
      {loading ? `Collecting...` : "Collect All"}
    </button>
  )
}

export default CollectAllButton
