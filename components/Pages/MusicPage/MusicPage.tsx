import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import MusicSlider from "./MusicSlider"

const MusicPage = () => (
  <Layout type="base">
    <SeoHead title="HENO.MUSIC" image="/images/Landing/music.jpg" />
    <div className="p-[10px] border-[2px] border-[#d2d2d2] h-full">
      <div
        className="border-[2px] border-[#8c8c8c] text-[#d2d2d2] font-dresden py-[35px] text-center
                flex items-center justify-center text-[16px] relative h-full"
      >
        <div className="h-fit max-h-full overflow-y-auto px-[20px] flex flex-col gap-y-[20px] w-full overflow-hidden px-[30px]">
          <MusicSlider />
        </div>
        <div className="absolute top-2 left-2 z-20">
          <p className="text-white text-xs">CCTV</p>
        </div>
        <div className="absolute top-2 right-2 z-20 flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
          <p className="text-white text-xs mr-2">REC</p>
          <div className="w-4 h-4 bg-gray-300 rounded-sm" />
        </div>
        <div className="absolute bottom-2 left-2 z-20">
          <p className="text-white text-xs">12:12PM Miami, FL</p>
        </div>
        <div className="absolute bottom-2 right-2 z-20">
          <p className="text-white text-xs">12/12/2023</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default MusicPage
