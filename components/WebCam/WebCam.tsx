import { useRouter } from "next/router"
import { usePageLoad } from "@/providers/PageLoadProvider"
import AboutContent from "../Pages/AboutPage/AboutContent"

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
      {granted && <>{isAboutPage && <AboutContent isCam />}</>}
    </div>
  )
}

export default WebCam
