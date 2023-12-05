import Media from "../../../Core/Media"
import Slider from "../../../Core/Slider"
import musics from "../musics.json"

const MusicSlider = () => (
  <Slider
    className="!overflow-hidden w-full !py-[40px]"
    sliderProps={{
      centeredSlides: true,
      loop: true,
      grabCursor: true,
      slidesPerView: 4,
    }}
  >
    {musics.map((music, index) => (
      <Media
        type="image"
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        blurLink={music}
        link={music}
        containerClasses="w-[200px] aspect-[1/1] skew-y-[-5deg] rounded-[10px] overflow-hidden"
      />
    ))}
  </Slider>
)

export default MusicSlider
