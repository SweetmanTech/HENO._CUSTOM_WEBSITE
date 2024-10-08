import CollectDropButton from "@/components/CollectDropButton"
import DropCollect from "@/components/DropCollect"
import data from "@/lib/zora-drops"

const BonasiSection = ({ isPopup }) => (
  <DropCollect
    title={data[12].title}
    artist={data[12].artist}
    isPopup={isPopup}
    animationUrl={data[12].ipfs}
  >
    <CollectDropButton />
  </DropCollect>
)

export default BonasiSection
