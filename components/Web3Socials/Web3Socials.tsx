import Media from "../Core/Media"

const Web3Socials = ({ isPopup = false }) => {
  const lensIconSize = isPopup ? "w-[20px] md:w-[30px]" : "w-[25px] md:w-[55px]"
  const zoraIconSize = isPopup ? "w-[15px] md:w-[20px]" : "w-[18px] md:w-[40px]"
  const soundIconSize = isPopup ? "w-[15px] md:w-[25px]" : "w-[18px] md:w-[40px]"
  const catalogIconSize = isPopup ? "w-[18px] md:w-[30px]" : "w-[20px] md:w-[50px]"
  const textClasses = !isPopup && "md:text-[20px]"

  return (
    <div className="flex gap-x-[15px] md:gap-x-[40px] items-end">
      <a href="https://hey.xyz/u/mynameisheno" target="_blank" rel="noreferrer">
        <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
          <Media
            type="image"
            link="/images/Web3/LENS.svg"
            blurLink="/images/Web3/LENS.png"
            containerClasses={`aspect-[516/327] ${lensIconSize}`}
          />
          <p className={`text-white text-[12px] ${textClasses}`}>LENS</p>
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
          <p className={`text-white text-[12px] ${textClasses}`}>ZORA</p>
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
          <p className={`text-white text-[12px] ${textClasses}`}>SOUND.XYZ</p>
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
          <p className={`text-white text-[12px] ${textClasses}`}>CATALOG</p>
        </div>
      </a>
    </div>
  )
}

export default Web3Socials
