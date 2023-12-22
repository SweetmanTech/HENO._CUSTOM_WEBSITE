import useIsMobile from "../../../hooks/useIsMobile"
import Icon from "../../Core/Icon"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"

const AboutPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. ABOUT" image="/images/Landing/about.jpg" />
      <div className="p-[5px] md:p-[10px] border-[2px] border-[#d2d2d2] h-full">
        <div
          className="border-[1px] border-darkgray text-[#d2d2d2] font-dresden 
          py-[25px] text-center
          flex items-center justify-center text-[16px] relative h-full
          text-[12px] md:text-[16px]"
        >
          <div
            className="h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
          px-[15px] md:px-[20px] flex flex-col gap-y-[5px] md:gap-y-[20px]"
          >
            <p>
              {` Heno. is a true trailblazer of the music industry, boasting a plethora of talents as an
              artist, producer, engineer, community organizer, and Web3 builder. Notably, Heno. has been
              recognized as an "early innovator" in Web3 by Fortune Mag, while COLORS have praised his
              "hard-hitting and powerful aesthetic." Heno. has carved a unique and hybrid role in the
              music industry, simultaneously disrupting both the Web3 space and traditional music world.`}
            </p>
            <p>
              {`Hailing from Takoma Park, Maryland, as a first-generation Ethiopian-Eritrean artist, Heno.
              uses his art and music to tell intentional and impactful stories, finding comfort within
              uncomfortable conversations. With an impressive roster of collaborators including Mick
              Jenkins, JPEGMAFIA, Chaz Bear (Toro Y Moi) just to name a few, Heno. has proven his
              versatility as an artist. Heno.'s recently released the anticipated video for his track
              "Neybors" that has gained popularity, hitting over 3 million streams & continuing to grow.
              The track has been well-received by audiences in 2023 & had earned Heno. top ten spots on
              Spotify's Mellow Bars & Alternative Hip Hop playlists - not to mention performing the
              record at Coachella this year & being the first music artist to ever mint Coachella
              footage onchain.`}
            </p>
            <p>
              {`"Neybors" is the first single from Heno.'s forthcoming concept album "I'm Tired of Being
              Hypersurveilled" set to release in January 2024. Heno. speaks to his exhaustion with the
              oppressive & all encompassing nature of surveillance by using personal experience & world
              building to have universal conversations. This record is a part of a multi-hyphenate media
              experience that includes a pixel arcade game, a VR world built in Unreal Engine, a short
              film, + full length music album with features like Mick Jenkins, Elujay, Felix! & more.
              "Neybors" is on the lighter side of surveillance however the music further explores how
              surveillance affects all of us in a myriad of ways & why Heno. is tired of it.`}
            </p>
            <div className="w-full flex items-center justify-center gap-x-[5px] pt-[10px] md:hidden">
              <a
                href="https://open.spotify.com/artist/3mr6jeVpPIXBp8IMMb60aD"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="spotify" color="white" raw size={16} />
              </a>
              <a href="https://tidal.com/browse/artist/9582021" target="_blank" rel="noreferrer">
                <Icon name="tidal" color="white" raw size={16} />
              </a>
              <a
                href="https://music.apple.com/us/artist/heno/1352075132"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="apple" color="white" raw size={16} />
              </a>
              <a href="https://soundcloud.com/mynameisheno" target="_blank" rel="noreferrer">
                <Icon name="soundcloud" color="white" raw size={16} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC3cM8JX39gmiNi7vSQX9KXQ"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="youtube" color="white" raw size={16} />
              </a>
              <a href="https://www.facebook.com/mynameisheno/">
                <Icon name="facebook" color="white" raw size={16} />
              </a>
              <a
                href="https://www.instagram.com/mynameisheno/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="instagram" color="white" raw size={16} />
              </a>
              <a href="https://twitter.com/mynameisheno?lang=en" target="_blank" rel="noreferrer">
                <Icon name="twitter" color="white" raw size={16} />
              </a>
            </div>
          </div>
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
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
