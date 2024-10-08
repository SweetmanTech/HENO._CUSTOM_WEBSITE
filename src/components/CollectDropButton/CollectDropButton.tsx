const CollectDropButton = ({ className = "" }: { className?: string }) => (
  <button type="button" className={`${className} bg-darkgray py-[3px] w-full`} disabled>
    Collect
  </button>
)

export default CollectDropButton
