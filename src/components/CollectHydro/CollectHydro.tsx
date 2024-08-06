import { toast } from "react-toastify"
import useHydroCollect from "@/hooks/useHydroCollect"

const CollectHydro = ({ className = "" }) => {
  const { collect, loading } = useHydroCollect()

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
      {loading ? `Collecting...` : "Collect"}
    </button>
  )
}

export default CollectHydro
