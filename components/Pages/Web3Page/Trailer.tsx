import useIsMobile from "../../../hooks/useIsMobile"
import Media from "../../Core/Media"

const Trailer = ({ isPopup = false }) => {
  const isMobile = useIsMobile()

  const desktopLensSize = isPopup ? "w-[40px]" : "w-[55px]"
  const desktopZoraSize = isPopup ? "w-[30px]" : "w-[40px]"
  const desktopSoundSize = isPopup ? "w-[30px]" : "w-[40px]"
  const desktopCatalogSize = isPopup ? "w-[40px]" : "w-[50px]"

  const mobileLensSize = "w-[25px]"
  const mobileZoraSize = "w-[18px]"
  const mobileSoundSize = "w-[18px]"
  const mobileCatalogSize = "w-[20px]"

  return (
    <div className="h-fit max-h-full overflow-y-auto w-full">
      <div className="flex flex-col items-center gap-y-[40px]">
        <Media
          type="image"
          containerClasses={`${isPopup ? "w-[150px]" : "w-[250px]"} aspect-[880/1586]`}
          link="/images/Web3/heno.png"
          blurLink="/images/Web3/heno.png"
        />
        <div className="flex gap-x-[15px] md:gap-x-[40px] items-end">
          <a href="https://hey.xyz/u/mynameisheno" target="_blank" rel="noreferrer">
            <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
              <Media
                type="image"
                link="/images/Web3/LENS.svg"
                blurLink="/images/Web3/LENS.png"
                containerClasses={`aspect-[516/327] ${isMobile ? mobileLensSize : desktopLensSize}`}
              />
              <p className="text-white text-[12px] md:text-[20px]">LENS</p>
            </div>
          </a>
          <a href="https://zora.co/heno.eth" target="_blank" rel="noreferrer">
            <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
              <Media
                type="image"
                link="/images/Web3/ZORA.svg"
                blurLink="/images/Web3/ZORA.png"
                containerClasses={`aspect-[1/1] ${isMobile ? mobileZoraSize : desktopZoraSize}`}
              />
              <p className="text-white text-[12px] md:text-[20px]">ZORA</p>
            </div>
          </a>
          <a href="https://www.sound.xyz/heno" target="_blank" rel="noreferrer">
            <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
              <Media
                type="image"
                link="/images/Web3/SOUND.svg"
                blurLink="/images/Web3/SOUND.png"
                containerClasses={`aspect-[1/1] ${isMobile ? mobileSoundSize : desktopSoundSize}`}
              />
              <p className="text-white text-[12px] md:text-[20px]">SOUND.XYZ</p>
            </div>
          </a>
          <a href="https://beta.catalog.works/heno" target="_blank" rel="noreferrer">
            <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
              <Media
                type="image"
                link="/images/Web3/CATALOG.svg"
                blurLink="/images/Web3/CATALOG.png"
                containerClasses={`aspect-[357/278] ${
                  isMobile ? mobileCatalogSize : desktopCatalogSize
                }`}
              />
              <p className="text-white text-[12px] md:text-[20px]">CATALOG</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Trailer
