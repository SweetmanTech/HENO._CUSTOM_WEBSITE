import CollectHydro from "@/components/CollectHydro"
import data from "@/lib/zora-drops"

const HydroplaningSection = ({ isPopup }) => (
  <div className="w-full flex flex-col gap-1.5">
    <video
      src="https://ipfs.decentralized-content.com/ipfs/bafybeibifnzka6oqs77ascf5fuhtxtv4mc56jc47rb4fqbjz644byzu72q"
      preload="auto"
      controls
      playsInline
      webkit-playsinline
      x5-playsinline
      muted
      className={`${isPopup ? "h-[200px]" : "h-[300px]"}`}
    />
    <CollectHydro />
    <span className={`uppercase text-[12px] ${isPopup ? "md:text-[14px]" : "md:text-[16px]"}`}>
      {data[11].title} By {data[11].artist}
    </span>
  </div>
)

export default HydroplaningSection
