import Web3Socials from "@/components/Web3Socials"
import TrailerButtons from "./TrailerButtons"
import ZoraDropPlayers from "./ZoraDropPlayers"

const Trailer = ({ isPopup = false }) => (
  <div className="h-fit max-h-full overflow-y-auto w-full">
    <div className="flex flex-col items-center gap-y-[15px] md:gap-y-[20px]">
      <div className="flex flex-col gap-y-[10px]">
        <ZoraDropPlayers isPopup={isPopup} />
        <TrailerButtons />
      </div>
      <Web3Socials isPopup={isPopup} />
    </div>
  </div>
)

export default Trailer
