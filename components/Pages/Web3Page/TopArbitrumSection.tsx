import CollectArbitrum from "@/components/CollectArbitrum"

const TopArbitrumSection = ({ isPopup }) => (
  <div className="w-full flex flex-col gap-1.5">
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
    <CollectArbitrum />
  </div>
)

export default TopArbitrumSection
