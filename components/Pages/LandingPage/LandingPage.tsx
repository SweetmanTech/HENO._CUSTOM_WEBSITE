import { useEffect } from "react"
import LandingCard from "../../LandingCard"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import LoadingPage from "../../LoadingPage"
import useIsMobile from "../../../hooks/useIsMobile"
import { usePageLoad } from "../../../providers/PageLoadProvider"

const LandingPage = () => {
  const { entered, setEntered } = usePageLoad()

  const isMobile = useIsMobile()

  useEffect(() => {
    const handlePageClick = () => setEntered(true)
    if (!entered) {
      window.addEventListener("click", handlePageClick)
    }

    return () => {
      window.removeEventListener("click", handlePageClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entered])

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. HOME" />
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-y-[10px] md:gap-[20px] 
        h-[calc(100%-40px)] md:h-full ${!entered ? "hidden" : ""}`}
      >
        <LandingCard title="ABOUT" img="/images/Landing/about.jpg" href="/about" />
        <LandingCard title="MUSIC" img="/images/Landing/music.jpg" href="/music" />
        <LandingCard title="WEB 3" img="/images/Landing/webThree.jpg" href="/web3" />
        <LandingCard title="PRESS" img="/images/Landing/press.jpg" href="/press" />
      </div>
      {isMobile && (
        <a
          type="button"
          className="w-full bg-gray_1 font-dresden h-[35px] mt-[5px]
        flex justify-center items-center"
          href="https://play.mynameisheno.com/"
          target="_blank"
          rel="noreferrer"
        >
          Play Relief
        </a>
      )}
      {!entered && <LoadingPage />}
    </Layout>
  )
}

export default LandingPage
