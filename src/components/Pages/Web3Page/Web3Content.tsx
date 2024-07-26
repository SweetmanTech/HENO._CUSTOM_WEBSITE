import Web3Socials from "@/components/Web3Socials"
import Trailer from "./Trailer"
import RecBar from "../../RecBar"

const Web3Content = ({ isPopup = false }) => (
  <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
    <div
      className={`border-[1px] border-darkgray text-gray_1 font-dresden 
      py-[25px] text-center
      flex flex-col gap-4 items-center justify-center text-[16px] relative h-full
      text-[12px] md:text-[16px]`}
    >
      <div
        className={`relative z-[1] w-full h-[80%] overflow-y-auto text-[12px] md:text-[16px]
        px-[15px] md:px-[20px] flex flex-col gap-y-[5px] ${
          isPopup ? "md:gap-y-[10px]" : "md:gap-y-[20px]"
        }`}
      >
        <Trailer isPopup={isPopup} />
      </div>
      <Web3Socials isPopup={isPopup} />
      <RecBar cctvNumber={3} />
    </div>
  </div>
)

export default Web3Content
