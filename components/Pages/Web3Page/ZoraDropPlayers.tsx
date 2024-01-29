import VideoPlayer from "../../VideoPlayer"
import useZoraDropPlayers from "../../../hooks/useZoraDropPlayers"
import data from "../../../utils/zora-drops"

const ZoraDropPlayers = ({ isPopup }) => {
  const { nextDrop, selectedDrop } = useZoraDropPlayers()

  return (
    <>
      {data.map((src, i) => (
        <VideoPlayer
          src={src}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isActive={selectedDrop === i}
          nextDrop={nextDrop}
          selectedDrop={selectedDrop}
          isPopup={isPopup}
        />
      ))}
    </>
  )
}

export default ZoraDropPlayers
