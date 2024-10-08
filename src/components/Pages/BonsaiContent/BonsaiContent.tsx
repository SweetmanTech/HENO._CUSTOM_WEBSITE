import getIpfsLink from "@/lib/getIpfsLink"
import { BONSAI } from "@/lib/consts"
import RecBar from "../../RecBar"
import useIsMobile from "../../../hooks/useIsMobile"

const BonsaiContent = () => {
  const isMobile = useIsMobile()

  return (
    <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
      <div
        className="border-[1px] border-darkgray text-gray_1 font-dresden 
            py-[25px] text-center
            flex items-center justify-center text-[16px] relative h-full
            text-[12px] md:text-[16px] relative"
      >
        <div
          className="h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
            px-[15px] md:px-[20px] flex flex-col gap-y-[5px] md:gap-y-[20px]"
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={getIpfsLink(BONSAI)}
            width={isMobile ? 180 : 200}
            height={isMobile ? 125 : 230}
            controls
            autoPlay
          />
        </div>
        <RecBar />
      </div>
    </div>
  )
}

export default BonsaiContent
