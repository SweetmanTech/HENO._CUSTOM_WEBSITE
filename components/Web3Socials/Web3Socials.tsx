import Media from "../Core/Media"

const Web3Socials = ({ isPopup = false, isCam = false }) => {
  const lensIconSize = isPopup || isCam ? "w-[20px] md:w-[40px]" : "w-[25px] md:w-[55px]"
  const zoraIconSize = isPopup || isCam ? "w-[15px] md:w-[30px]" : "w-[18px] md:w-[40px]"
  const soundIconSize = isPopup || isCam ? "w-[15px] md:w-[30px]" : "w-[18px] md:w-[40px]"
  const catalogIconSize = isPopup || isCam ? "w-[18px] md:w-[40px]" : "w-[20px] md:w-[50px]"
  const labelClasses = `text-white text-[12px] md:text-[20px] ${isCam && "!text-[12px]"}`
  return (
    <div className={`flex gap-x-[15px] md:gap-x-[40px] items-end ${isCam && "!gap-x-[15px]"}`}>
      <a href="https://hey.xyz/u/mynameisheno" target="_blank" rel="noreferrer">
        <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
          <Media
            type="image"
            link="/images/Web3/LENS.svg"
            blurLink="/images/Web3/LENS.png"
            containerClasses={`aspect-[516/327] ${lensIconSize}`}
          />
          <p className={labelClasses}>LENS</p>
        </div>
      </a>
      <a href="https://zora.co/heno.eth" target="_blank" rel="noreferrer">
        <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
          <Media
            type="image"
            link="/images/Web3/ZORA.svg"
            blurLink="/images/Web3/ZORA.png"
            containerClasses={`aspect-[1/1] ${zoraIconSize}`}
          />
          <p className={labelClasses}>ZORA</p>
        </div>
      </a>
      <a href="https://www.sound.xyz/heno" target="_blank" rel="noreferrer">
        <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
          <Media
            type="image"
            link="/images/Web3/SOUND.svg"
            blurLink="/images/Web3/SOUND.png"
            containerClasses={`aspect-[1/1] ${soundIconSize}`}
          />
          <p className={labelClasses}>SOUND.XYZ</p>
        </div>
      </a>
      <a href="https://beta.catalog.works/heno" target="_blank" rel="noreferrer">
        <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
          <Media
            type="image"
            link="/images/Web3/CATALOG.svg"
            blurLink="/images/Web3/CATALOG.png"
            containerClasses={`aspect-[357/278] ${catalogIconSize}`}
          />
          <p className={labelClasses}>CATALOG</p>
        </div>
      </a>
    </div>
  )
}

export default Web3Socials
