import useCollectAll from "../../hooks/useCollectAll"

const CollectAllButton = ({ className = "" }) => {
  const { onClick } = useCollectAll()

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

export default CollectAllButton
