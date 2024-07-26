import ArcadeSection from "./ArcadeSection"
import DropSection from "./DropSection"
import NeyborsSection from "./NeyborsSection"
import TopArbitrumSection from "./TopArbitrumSection"

const Trailer = ({ isPopup = false }) => (
  <div className="h-full overflow-y-auto w-full">
    <div className={`flex flex-col items-center gap-y-[10px] ${!isPopup && "md:gap-y-[20px]"}`}>
      <div className="flex flex-col gap-y-[10px] h-full overflow-y-auto pr-2">
        <TopArbitrumSection isPopup={isPopup} />
        <DropSection isPopup={isPopup} />
        <ArcadeSection isPopup={isPopup} />
        <NeyborsSection isPopup={isPopup} />
      </div>
    </div>
  </div>
)

export default Trailer
