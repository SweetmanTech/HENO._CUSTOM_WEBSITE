import useIsMobile from "@/hooks/useIsMobile"
import Trailer from "./Trailer"
import RecBar from "../../RecBar"
import { useWeb3Drops } from "../../../providers/Web3Provider"
import data from "../../../lib/zora-drops"

const Web3Content = ({ isPopup = false, isCam = false }) => {
  const { selectedDrop } = useWeb3Drops()
  const isMobile = useIsMobile()

  return (
    <div className={`p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full ${isCam && "!p-[5px]"}`}>
      <div
        className={`border-[1px] border-darkgray text-gray_1 font-dresden 
        py-[25px] text-center
        flex flex-col md:flex-row
        gap-2 items-center justify-center relative h-full
        text-[12px] md:text-[16px] relative ${isCam && "!flex-col"}`}
      >
        <div
          className={`md:absolute top-[35px] left-1 md:text-left md:left-2 capitalize ${
            isPopup || isCam ? "text-[10px] md:text-[14px]" : "text-[12px] md:text-[16px]"
          }`}
        >
          {data[selectedDrop].startedAt} <br />
          <span className="uppercase">{data[selectedDrop].title}</span> {isMobile && <br />}
          By {data[selectedDrop].artist}
        </div>
        <div
          className={`h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
          px-[15px] md:px-[20px] flex flex-col gap-y-[5px] md:gap-y-[20px] ${
            isCam && "!px-[15px] !text-[12px] !gap-y-[5px]"
          }`}
        >
          <Trailer isPopup={isPopup} isCam={isCam} />
        </div>
        <RecBar cctvNumber={3} isCam={isCam} />
      </div>
    </div>
  )
}

export default Web3Content
