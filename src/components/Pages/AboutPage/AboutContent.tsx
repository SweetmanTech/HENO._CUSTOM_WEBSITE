import RecBar from "../../RecBar"

const AboutContent = ({ isPopup = false }) => (
  <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
    <div
      className="border-[1px] border-darkgray text-gray_1 font-dresden 
      py-[25px] text-center
      flex items-center justify-center relative h-full
      text-[12px] md:text-[16px]"
    >
      <div
        className={`h-fit max-h-full overflow-y-auto text-[12px] ${
          isPopup ? "md:text-[14px]" : "md:text-[16px]"
        }
        px-[15px] flex flex-col gap-y-[5px] md:gap-y-[20px]`}
      >
        <p>
          {`Heno. is an artist and producer who experiments across different mediums, hailed by Fortune as an "early innovator" & praised by COLORS for his "hard-hitting and powerful aesthetic." A first-generation Ethiopian-Eritrean based in Los Angeles, CA by way of Takoma Park, Maryland, Heno. uses his music and love for art to explore impactful stories & build worlds bridging the traditional music industry & the Web3 space. Sonically, Heno.'s versatility knows no bounds with collaborations from Mick Jenkins, JPEGMAFIA, Chaz Bear (Toro Y Moi), Elujay, J.Robb & many more that have amassed millions of plays. Heno. has a lot in the queue this year with new music on the horizon, stay tuned for more.`}
        </p>
      </div>
      <RecBar cctvNumber={1} />
    </div>
  </div>
)

export default AboutContent
