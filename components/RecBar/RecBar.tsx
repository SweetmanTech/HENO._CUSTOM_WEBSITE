import Icon from "../Core/Icon"

const RecBar = () => (
  <>
    <div className="absolute top-1 left-1 md:top-2 md:left-2 z-20">
      <p className="text-[white] text-[10px] md:text-xs">CCTV 002</p>
    </div>
    <div className="absolute top-1 right-1 md:top-2 md:right-2 z-20 flex items-center">
      <div className="w-2 h-2 md:w-3 md:h-3 bg-[red] rounded-full mr-2" />
      <p className="text-[white] text-[10px] md:text-xs mr-2">REC</p>
      <Icon name="wifi" raw size={16} color="white" />
    </div>
    <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 z-20">
      <p className="text-[white] text-[10px] md:text-xs">DUR : 08:13:24:53</p>
    </div>
    <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 z-20">
      <p className="text-[white] text-[10px] md:text-xs">2024/08/29 15:39:26</p>
    </div>
  </>
)

export default RecBar
