import Web3Socials from "@/components/Web3Socials"
import DropSection from "./DropSection"
import TopArbitrumSection from "./TopArbitrumSection"

const Trailer = ({ isPopup = false }) => (
  <div className="h-fit max-h-full overflow-y-auto w-full">
    <div className={`flex flex-col items-center gap-y-[10px] ${isPopup ? "" : "md:gap-y-[20px]"}`}>
      <div
        className={`flex flex-col gap-y-[10px] ${isPopup ? "max-h-[235px]" : "max-h-[335px]"}
      overflow-y-auto pr-2`}
      >
        <TopArbitrumSection isPopup={isPopup} />
        <DropSection isPopup={isPopup} />
      </div>
      <Web3Socials isPopup={isPopup} />
    </div>
  </div>
)

export default Trailer
