import useIsMobile from "../../../hooks/useIsMobile"
import Layout from "../../Layout"
import RecBar from "../../RecBar"
import SeoHead from "../../SeoHead"
import MusicList from "./MusicList"
import MusicSlider from "./MusicSlider"

const MusicPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. MUSIC" image="/images/Landing/music.jpg" />
      <div className="p-[5px] md:p-[10px] border-[2px] border-[#d2d2d2] h-full">
        <div
          className="border border-darkgray text-[#d2d2d2] font-dresden py-[35px] text-center
                  flex items-center justify-center text-[16px] relative h-full"
        >
          <div
            className="h-fit max-h-full overflow-y-auto py-[10px] px-[20px] 
          flex flex-row flex-wrap gap-y-[30px] justify-around md:flex-col md:gap-y-[20px] w-full overflow-hidden px-[30px]"
          >
            {isMobile ? <MusicList /> : <MusicSlider />}
          </div>
          <RecBar />
        </div>
      </div>
    </Layout>
  )
}

export default MusicPage
