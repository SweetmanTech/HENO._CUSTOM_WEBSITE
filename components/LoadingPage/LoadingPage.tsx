import Image from "next/image"
import { usePageLoad } from "@/providers/PageLoadProvider"
import useIsMobile from "../../hooks/useIsMobile"

const LoadingPage = () => {
  const isMobile = useIsMobile()
  const { setEntered } = usePageLoad()

  return (
    <button
      className="fixed top-0 left-0 w-full h-full z-50"
      type="button"
      onClick={() => setEntered(true)}
    >
      <Image
        blurDataURL={isMobile ? "/images/Loading/m_loading.png" : "/images/Loading/loading.png"}
        alt="SYSTEM"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        src={isMobile ? "/images/Loading/m_loading.png" : "/images/Loading/loading.png"}
      />
    </button>
  )
}

export default LoadingPage
