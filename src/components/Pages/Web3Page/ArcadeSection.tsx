import CollectArcade from "@/components/CollectArcade"
import data from "@/lib/zora-drops"
import Image from "next/image"

const ArcadeSection = ({ isPopup }) => (
  <div className="w-full flex flex-col gap-1.5 items-center">
    <div className={`relative aspect-square ${isPopup ? "h-[200px]" : "h-[300px]"}`}>
      <Image
        src="https://ipfs.decentralized-content.com/ipfs/bafkreigwvgvi5hkuhuuv3g7n2hq5yxyp6qxjagop2zze4bnhtlixmrstim"
        alt=""
        layout="fill"
        className="absolute size-full"
      />
    </div>
    <CollectArcade />
    <span className={`uppercase text-[12px] ${isPopup ? "md:text-[14px]" : "md:text-[16px]"}`}>
      {data[9].title} By {data[9].artist}
    </span>
  </div>
)

export default ArcadeSection
