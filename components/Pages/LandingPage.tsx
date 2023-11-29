import LandingCard from "../LandingCard"

const LandingPage = () => (
  <div className="flex flex-col gap-3 justify-center items-center h-screen bg-black text-white font-dresden">
    <div className="flex flex-wrap gap-3 justify-center items-center w-full">
      <LandingCard title="ABOUT" img="/images/landing/about.jpg" href="/about" />
      <LandingCard title="MUSIC" img="/images/landing/music.jpg" href="/music" />
    </div>
    <div className="flex flex-wrap gap-3 justify-center items-center w-full">
      <LandingCard title="WEB 3" img="/images/landing/webThree.jpg" href="/web3" />
      <LandingCard title="PRESS" img="/images/landing/press.jpg" href="/press" />
    </div>
  </div>
)

export default LandingPage
