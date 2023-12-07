import { useState, useEffect } from "react"
import LandingCard from "../../LandingCard"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import LoadingPage from "../../LoadingPage"

const LandingPage = () => {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    // Add event listener for the entire page
    const handlePageClick = () => setEntered(true)
    if (!entered) {
      window.addEventListener("click", handlePageClick)
    }

    // Cleanup the event listener
    return () => {
      window.removeEventListener("click", handlePageClick)
    }
  }, [entered])

  return (
    <Layout type="base" entered={entered}>
      <SeoHead title="HENO. HOME" image="/images/Landing/press.jpg" />

      <div className={`grid grid-cols-2 gap-[20px] h-full ${!entered ? "hidden" : ""}`}>
        <LandingCard title="ABOUT" img="/images/Landing/about.jpg" href="/about" />
        <LandingCard title="MUSIC" img="/images/Landing/music.jpg" href="/music" />
        <LandingCard title="WEB 3" img="/images/Landing/webThree.jpg" href="/web3" />
        <LandingCard title="PRESS" img="/images/Landing/press.jpg" href="/press" />
      </div>

      {!entered && <LoadingPage />}
    </Layout>
  )
}

export default LandingPage
