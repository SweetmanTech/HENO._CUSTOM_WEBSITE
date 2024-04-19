import Web3Socials from "@/components/Web3Socials"
import useIsMobile from "@/hooks/useIsMobile"
import DropSection from "./DropSection"
import TopArbitrumSection from "./TopArbitrumSection"

const Trailer = ({ isPopup = false, isCam = false }) => {
  const isMobile = useIsMobile()

  return (
    <div className="h-fit max-h-full overflow-y-auto w-full">
      <div className="flex flex-col items-center gap-y-[15px] md:gap-y-[20px]">
        <div
          className={`flex flex-col gap-y-[10px] ${
            isPopup || isMobile || isCam ? "max-h-[235px]" : "max-h-[335px]"
          }
        overflow-y-auto pr-2`}
        >
          <TopArbitrumSection isPopup={isPopup} isCam={isCam} />
          <DropSection isPopup={isPopup} isCam={isCam} />
        </div>
        <Web3Socials isPopup={isPopup} isCam={isCam} />
      </div>
    </div>
  )
}

export default Trailer
