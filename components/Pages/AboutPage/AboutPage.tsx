import Layout from "../../Layout"

const AboutPage = () => (
  <Layout type="base">
    <div className="p-[10px] border-[2px] border-[#d2d2d2] h-full">
      <div
        className="border-[2px] border-[#8c8c8c] text-[#d2d2d2] font-dresden py-[35px] text-center
                flex items-center justify-center text-[16px] relative h-full"
      >
        <div className="h-fit max-h-full overflow-y-auto px-[20px] flex flex-col gap-y-[20px]">
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

export default AboutPage
