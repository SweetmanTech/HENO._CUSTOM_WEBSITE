import useIsMobile from "@/hooks/useIsMobile"
import Trailer from "./Trailer"
import RecBar from "../../RecBar"
import { useWeb3Drops } from "../../../providers/Web3Provider"
import data from "../../../lib/zora-drops"

const Web3Content = ({ isPopup = false }) => {
  const { selectedDrop } = useWeb3Drops()
  const isMobile = useIsMobile()

  return (
    <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
      <div
        className={`border-[1px] border-darkgray text-gray_1 font-dresden 
        py-[25px] text-center
        flex flex-col ${!isPopup && "md:flex-row "}
        gap-2 items-center justify-center text-[16px] relative h-full
        text-[12px] md:text-[16px] relative`}
      >
        <div
          className={`z-[2] capitalize ${
            isPopup
              ? "text-[10px] md:text-[12px]"
              : "md:absolute top-[35px] left-1 text-left md:left-2 text-[12px] md:text-[16px]"
          }`}
        >
          <span className="uppercase">{data[selectedDrop].title}</span>{" "}
          {isMobile || (isPopup && <br />)}
          By {data[selectedDrop].artist}
        </div>
        <div
          className={`relative z-[1] h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
          px-[15px] md:px-[20px] flex flex-col gap-y-[5px] ${
            isPopup ? "md:gap-y-[10px]" : "md:gap-y-[20px]"
          }`}
        >
          <Trailer isPopup={isPopup} />
        </div>
        <RecBar cctvNumber={3} />
      </div>
    </div>
  )
}

export default Web3Content
