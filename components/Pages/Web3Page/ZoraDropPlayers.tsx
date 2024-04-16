import Slider from "@/components/Core/Slider"
import { EffectCreative } from "swiper"
import { useState } from "react"
import VideoPlayer from "../../VideoPlayer"
import data from "../../../lib/zora-drops"
import { useWeb3Drops } from "../../../providers/Web3Provider"

const ZoraDropPlayers = ({ isPopup }) => {
  const { nextDrop, selectedDrop } = useWeb3Drops()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Slider
      className={`!overflow-hidden
       ${isPopup ? "!h-[200px]" : "!h-[300px]"}`}
      sliderProps={{
        direction: "vertical",
        grabCursor: true,
        slidesPerView: 1,
        modules: [EffectCreative],
        mousewheel: {
          sensitivity: 1,
        },
        onSlideChange: (swiper) => {
          setActiveIndex(swiper.realIndex)
        },
      }}
    >
      {data.map((item, i) => (
        <VideoPlayer
          src={item.ipfs}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isActive={i === activeIndex}
          nextDrop={nextDrop}
          selectedDrop={selectedDrop}
          isPopup={isPopup}
        />
      ))}
    </Slider>
  )
}

export default ZoraDropPlayers
