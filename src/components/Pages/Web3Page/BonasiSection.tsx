import CollectDropButton from "@/components/CollectDropButton"
import DropCollect from "@/components/DropCollect"
import { BONSAI_DROP_ADDRESS, IS_TESTNET } from "@/lib/consts"
import data from "@/lib/zora-drops"
import { Address } from "viem"
import { base, baseSepolia } from "viem/chains"

const BonasiSection = ({ isPopup }) => (
  <DropCollect
    title={data[12].title}
    artist={data[12].artist}
    isPopup={isPopup}
    animationUrl={data[12].ipfs}
  >
    <CollectDropButton
      chainId={IS_TESTNET ? baseSepolia.id : base.id}
      address={BONSAI_DROP_ADDRESS as Address}
    />
  </DropCollect>
)

export default BonasiSection
