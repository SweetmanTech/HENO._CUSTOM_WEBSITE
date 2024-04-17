import VideoPlayer from "../../VideoPlayer"
import data from "../../../lib/zora-drops"
import { useWeb3Drops } from "../../../providers/Web3Provider"

const ZoraDropPlayers = ({ isPopup }) => {
  const { nextDrop, selectedDrop } = useWeb3Drops()

  return (
    <div
      className={`${isPopup ? "h-[200px]" : "h-[300px]"} overflow-y-auto overflow-x-hidden
      flex flex-col items-center`}
    >
      <video
        src="https://ipfs.decentralized-content.com/ipfs/bafybeicmqcva4bw7psql7hhfa4ugxi743i2ytuhhpfugxzhrfpvrffhwku"
        preload="auto"
        controls
        playsInline
        webkit-playsinline
        x5-playsinline
        muted
        className={`${isPopup ? "h-[200px]" : "h-[300px]"}`}
      />
      {data.map((item, i) => (
        <VideoPlayer
          src={item.ipfs}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isActive={selectedDrop === i}
          nextDrop={nextDrop}
          selectedDrop={selectedDrop}
          isPopup={isPopup}
        />
      ))}
    </div>
  )
}

export default ZoraDropPlayers
