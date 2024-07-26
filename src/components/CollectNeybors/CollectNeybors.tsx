import use721Collect from "@/hooks/useCollect721"
import { NEYBORS_DROP_ADDRESS } from "@/lib/consts"
import { toast } from "react-toastify"

const CollectNeybors = ({ className = "" }) => {
  const { collect721, loading } = use721Collect()

  const handleClick = async () => {
    const response = await collect721(NEYBORS_DROP_ADDRESS)
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
