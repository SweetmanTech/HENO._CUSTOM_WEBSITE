import { useRouter } from "next/router"
import { usePageLoad } from "@/providers/PageLoadProvider"
import AboutContent from "../Pages/AboutPage/AboutContent"
import PressContent from "../Pages/PressPage/PressContent"
import MusicContent from "../Pages/MusicPage/MusicContent"
import Web3Content from "../Pages/Web3Page/Web3Content"

const WebCam = () => {
  const { granted, setGranted } = usePageLoad()
  const { pathname } = useRouter()

  const isWeb3Page = pathname.includes("/web3")
  const isMusicPage = pathname.includes("/music")
  const isAboutPage = pathname.includes("/about")
  const isPressPage = pathname.includes("/press")

  return (
    <div className="w-full h-full">
      {!granted && (
        <button
          type="button"
          className="w-full h-full flex justify-center items-center"
          onClick={() => setGranted(true)}
        >
          <p className="text-white text-xl">WebCam</p>
        </button>
      )}
      {granted && (
        <>
          {isAboutPage && <AboutContent isCam />}
          {isPressPage && <PressContent isCam />}
          {isMusicPage && <MusicContent isCam />}
          {isWeb3Page && <Web3Content isCam />}
        </>
      )}
    </div>
  )
}

export default WebCam
