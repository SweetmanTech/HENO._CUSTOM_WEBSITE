import { usePopupWidget } from "../../providers/PopupWidgetProvider"
import DraggableModal from "../Core/DraggableModal"
import AboutContent from "../Pages/AboutPage/AboutContent"
import MintContent from "../Pages/MintPage/MintContent"
import MusicContent from "../Pages/MusicPage/MusicContent"
import PressContent from "../Pages/PressPage/PressContent"

const PopUpWindows = () => {
  const {
    setIsOpenAbout,
    isOpenAbout,
    isOpenPress,
    setIsOpenPress,
    isOpenMusic,
    setIsOpenMusic,
    isOpenWeb3,
    setIsOpenWeb3,
  } = usePopupWidget()
  return (
    <>
      {isOpenAbout && (
        <DraggableModal
          href="/about"
          handleClose={() => setIsOpenAbout(false)}
          isVisible={isOpenAbout}
        >
          <AboutContent />
        </DraggableModal>
      )}
      {isOpenMusic && (
        <DraggableModal
          href="/music"
          handleClose={() => setIsOpenMusic(false)}
          isVisible={isOpenMusic}
        >
          <MusicContent isPopup />
        </DraggableModal>
      )}
      {isOpenWeb3 && (
        <DraggableModal
          href="/mint"
          handleClose={() => setIsOpenWeb3(false)}
          isVisible={isOpenWeb3}
        >
          <MintContent />
        </DraggableModal>
      )}
      {isOpenPress && (
        <DraggableModal
          href="/press"
          handleClose={() => setIsOpenPress(false)}
          isVisible={isOpenPress}
        >
          <PressContent />
        </DraggableModal>
      )}
    </>
  )
}

export default PopUpWindows
