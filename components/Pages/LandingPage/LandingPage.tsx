import LandingCard from "../../LandingCard"
import Layout from "../../Layout"

const LandingPage = () => (
  <Layout type="base">
    <div className="grid grid-cols-2 gap-[20px] h-full">
      <LandingCard title="ABOUT" img="/images/landing/about.jpg" href="/about" />
      <LandingCard title="MUSIC" img="/images/landing/music.jpg" href="/music" />
      <LandingCard title="WEB 3" img="/images/landing/webThree.jpg" href="/web3" />
      <LandingCard title="PRESS" img="/images/landing/press.jpg" href="/press" />
    </div>
  </Layout>
)

export default LandingPage
