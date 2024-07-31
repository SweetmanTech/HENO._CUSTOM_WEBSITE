import DraggableModal from "@/components/Core/DraggableModal"

const LandingPagePopup = ({ setIsOpenYoutubeModal }) => (
  <DraggableModal href="/" handleClose={() => setIsOpenYoutubeModal(false)} isVisible>
    <div className="iframely-embed flex flex-col h-full justify-center">
      <div className="iframely-responsive" style={{ height: "140px", paddingBottom: 0 }}>
        <a
          href="https://unitedmasters.com/m/hydroplaning"
          data-iframely-url="//iframely.net/9KqnAuQ"
          aria-label="Hydroplaning"
        >
          Hydroplaning
        </a>
      </div>
    </div>
    <script async src="//iframely.net/embed.js" />
  </DraggableModal>
)

export default LandingPagePopup
