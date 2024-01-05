import Link from "next/link"
import { useRouter } from "next/router"
import { usePopupWidget } from "../../providers/PopupWidgetProvider"
import DraggableModal from "../Core/DraggableModal"
import AboutContent from "../Pages/AboutPage/AboutContent"

const Navbar = () => {
  const { pathname } = useRouter()
  const { setIsOpenAbout, isOpenAbout } = usePopupWidget()

  const navClasses = `md:min-w-[80px] px-0 md:px-[10px] md:h-[40px] 
  text-[11px] md:text-[16px] md:py-[5px] py-[2px] h-fit uppercase md:capitalize
  md:border-none bg-darkgray flex items-center justify-center text-gray_1 font-dresden cursor-pointer`

  const isHomePage = pathname === "/"
  const isAboutPage = pathname.includes("/about")
  const isMusicPage = pathname.includes("/music")
  const isMintPage = pathname.includes("/mint")
  const isPressPage = pathname.includes("/press")

  return (
    <>
      <div className="w-full grid grid-cols-6 md:flex gap-x-[5px] md:gap-x-[10px]">
        <button
          className={`${navClasses}
        ${isHomePage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          type="button"
        >
          Home
        </button>
        <button
          className={`${navClasses}
        ${isAboutPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          type="button"
          onClick={() => setIsOpenAbout(true)}
        >
          About
        </button>
        <Link href="/music">
          <div
            className={`${navClasses}
          ${isMusicPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          >
            Music
          </div>
        </Link>
        <Link href="/mint">
          <div
            className={`${navClasses}
          ${isMintPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          >
            Web3
          </div>
        </Link>
        <Link href="/press">
          <div
            className={`${navClasses}
          ${isPressPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          >
            Press
          </div>
        </Link>
        <a href="https://play.mynameisheno.com" target="_blank" rel="noreferrer">
          <div className={navClasses}>Play</div>
        </a>
      </div>
      {isOpenAbout && (
        <DraggableModal
          href="/about"
          handleClose={() => setIsOpenAbout(false)}
          isVisible={isOpenAbout}
        >
          <AboutContent />
        </DraggableModal>
      )}
    </>
  )
}

export default Navbar
