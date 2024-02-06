import usePrivyCollect from "@/hooks/usePrivyCollect"

const PrivyCollectButton = ({ className = "" }) => {
  const { onClick } = usePrivyCollect()

  return (
    <button
      type="button"
      onTouchStart={onClick}
      onClick={onClick}
      className={`${className} bg-darkgray py-[3px]`}
    >
      Collect All
    </button>
  )
}

export default PrivyCollectButton
