import CollectNeybors from "@/components/CollectNeybors"
import data from "@/lib/zora-drops"

const NeyborsSection = ({ isPopup }) => (
  <div className="w-full flex flex-col gap-1.5">
    <video
      src="https://ipfs.decentralized-content.com/ipfs/bafybeieaq7nqlv5j2wndfkxwlodqddelahlmuwczbrzei7py5enzftuska"
      preload="auto"
      controls
      playsInline
      webkit-playsinline
      x5-playsinline
      muted
      className={`${isPopup ? "h-[200px]" : "h-[300px]"}`}
    />
    <CollectNeybors />
    <span className={`uppercase text-[12px] ${isPopup ? "md:text-[14px]" : "md:text-[16px]"}`}>
      {data[9].title} By {data[9].artist}
    </span>
  </div>
)

export default NeyborsSection
