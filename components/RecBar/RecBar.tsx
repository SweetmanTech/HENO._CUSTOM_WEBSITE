import getDateTimeString from "@/lib/getDateTimeString"
import { usePageLoad } from "@/providers/PageLoadProvider"
import Icon from "../Core/Icon"

const RecBar = ({ cctvNumber = 0, isCam = false }) => {
  const { liveTime } = usePageLoad()

  return (
    <>
      <div className={`absolute top-1 left-1 md:top-2 md:left-2 z-20 ${isCam && "!top-1 !left-1"}`}>
        <p className={`text-[white] text-[10px] md:text-xs ${isCam && "!text-[10px]"}`}>
          CCTV 00{cctvNumber}
        </p>
      </div>
      <div
        className={`absolute top-1 right-1 md:top-2 md:right-2 z-20 flex items-center ${
          isCam && "!top-1 !right-1"
        }`}
      >
        <div
          className={`w-2 h-2 md:w-3 md:h-3 bg-[red] rounded-full mr-2 ${isCam && "!w-2 !h-2"}`}
        />
        <p className={`text-[white] text-[10px] md:text-xs mr-2 ${isCam && "!text-[10px]"}`}>REC</p>
        <Icon name="wifi" raw size={16} color="white" />
      </div>
      <div
        className={`absolute bottom-1 left-1 md:bottom-2 md:left-2 z-20 ${
          isCam && "!bottom-1 !left-1"
        }`}
      >
        <p className={`text-[white] text-[10px] md:text-xs ${isCam && "!text-[10px]"}`}>
          DUR : 08:13:24:53
        </p>
      </div>
      <div
        className={`absolute bottom-1 right-1 md:bottom-2 md:right-2 z-20 ${
          isCam && "!bottom-1 !right-1"
        }`}
      >
        <p className={`text-[white] text-[10px] md:text-xs ${isCam && "!text-[10px]"}`}>
          {getDateTimeString(liveTime)}
        </p>
      </div>
    </>
  )
}

export default RecBar
