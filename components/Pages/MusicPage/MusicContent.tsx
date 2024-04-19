import useIsMobile from "../../../hooks/useIsMobile"
import MusicList from "./MusicList"
import MusicSlider from "./MusicSlider"
import RecBar from "../../RecBar"

const MusicContent = ({ isPopup = false, isCam = false }) => {
  const isMobile = useIsMobile()
  return (
    <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
      <div
        className="border border-darkgray text-gray_1 font-dresden py-[35px] text-center
                    flex flex-col items-center justify-center text-[16px] relative h-full"
      >
        {!isMobile && !isCam && <p className="text-[16px] md:text-[32px]">Scroll to see more</p>}
        <div
          className={`h-fit max-h-full overflow-y-auto py-[10px] px-[20px]
          flex flex-row flex-wrap gap-y-[30px] justify-around md:flex-col 
          md:gap-y-[20px] w-full overflow-hidden md:px-[30px] ${isCam && "!gap-[20px] !flex-row"}`}
        >
          {isMobile || isCam ? <MusicList /> : <MusicSlider isPopup={isPopup} />}
        </div>
        <RecBar cctvNumber={2} isCam={isCam} />
      </div>
    </div>
  )
}

export default MusicContent
