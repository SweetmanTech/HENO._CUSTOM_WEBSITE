import RecBar from "@/components/RecBar"
import Folder from "./Folder"

const EmployeeContent = ({ isPopup = false }) => (
  <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full w-full">
    <div
      className="border-[1px] border-darkgray text-gray_1 font-dresden 
              py-[25px] text-center grid grid-cols-2
              flex items-center justify-center text-[16px] relative h-full
              text-[12px] md:text-[16px] relative"
    >
      <Folder name="Mission Briefings" isPopup={isPopup} link="briefings" />
      <Folder name="Leaderboards" isPopup={isPopup} link="leaderboard" />
      <Folder name="intel" isPopup={isPopup} link="intel" />
      <Folder name="chat room" isPopup={isPopup} link="chat-room" />
      <RecBar cctvNumber={6} />
      <p
        className="uppercase text-white mx-auto absolute right-2 md:right-10 bottom-10 border border-white px-3 py-1
      text-[12px] md:text-[14px]"
      >
        Employee portal
      </p>
    </div>
  </div>
)

export default EmployeeContent
