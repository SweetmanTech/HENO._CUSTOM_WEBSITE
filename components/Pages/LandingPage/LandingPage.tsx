import LandingCard from "../../LandingCard"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"

const LandingPage = () => (
  <Layout type="base">
    <SeoHead title="HENO.HOME" image="/images/Landing/press.jpg" />
    <div className="grid grid-cols-2 gap-[20px] h-full">
      <LandingCard title="ABOUT" img="/images/Landing/about.jpg" href="/about" />
      <LandingCard title="MUSIC" img="/images/Landing/music.jpg" href="/music" />
      <LandingCard title="WEB 3" img="/images/Landing/webThree.jpg" href="/web3" />
      <LandingCard title="PRESS" img="/images/Landing/press.jpg" href="/press" />
    </div>
  </Layout>
)

export default LandingPage
