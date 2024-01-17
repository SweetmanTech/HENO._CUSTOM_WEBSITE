import { useRouter } from "next/router"
import Link from "next/link"
import { usePopupWidget } from "../../providers/PopupWidgetProvider"
import PopUpWindows from "../PopUpWindows/PopUpWindows"
import { SCREENS } from "../../utils/screens"

const Navbar = () => {
  const { pathname } = useRouter()
  const { openPopUp } = usePopupWidget()

  const navClasses = `md:min-w-[80px] px-0 md:px-[10px] md:h-[40px] 
  text-[11px] md:text-[16px] md:py-[5px] py-[2px] h-fit uppercase md:capitalize
  md:border-none bg-darkgray flex items-center justify-center text-gray_1 font-dresden cursor-pointer`

  const isHomePage = pathname === "/"
  const isAboutPage = pathname.includes("/about")
  const isMusicPage = pathname.includes("/music")
  const isWeb3Page = pathname.includes("/web3")
  const isPressPage = pathname.includes("/press")

  return (
    <>
      <div className="w-full grid grid-cols-5 md:flex gap-x-[5px] md:gap-x-[10px]">
        <Link href="/">
          <div
            className={`${navClasses}
          ${isHomePage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          >
            Home
          </div>
        </Link>
        <button
          className={`${navClasses}
        ${isAboutPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          type="button"
          onClick={() => openPopUp(SCREENS.ABOUT_SCREEN.screenName)}
        >
          About
        </button>
        <button
          onClick={() => openPopUp(SCREENS.MUSIC_SCREEN.screenName)}
          type="button"
          className={`${navClasses}
        ${isMusicPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Music
        </button>
        <button
          type="button"
          className={`${navClasses}
        ${isWeb3Page ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          onClick={() => openPopUp(SCREENS.WEB3_SCREEN.screenName)}
        >
          Web3
        </button>
        <button
          type="button"
          onClick={() => openPopUp(SCREENS.PRESS_SCREEN.screenName)}
          className={`${navClasses}
        ${isPressPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Press
        </button>
      </div>
      <PopUpWindows />
    </>
  )
}

export default Navbar
