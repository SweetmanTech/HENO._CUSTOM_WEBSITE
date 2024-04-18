import CollectAllButton from "@/components/CollectAllButton"
import CollectArbitrum from "@/components/CollectArbitrum"
import CrossmintButton from "@/components/CrossmintButton"
import LogoutButton from "@/components/LogoutButton"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import { CHAIN_ID } from "@/lib/consts"
import { usePrivy } from "@privy-io/react-auth"
import { useBalance } from "wagmi"

const TrailerButtons = () => {
  const { authenticated } = usePrivy()
  const { connectedWallet } = useConnectedWallet()
  const { data: balance } = useBalance({
    address: connectedWallet as `0x${string}`,
    chainId: CHAIN_ID,
  })
  const showCryptoButton = balance?.value > 0 || !authenticated

  return (
    <div className="flex flex-col gap-1">
      <CollectArbitrum />
      {showCryptoButton && <CollectAllButton />}
      {authenticated && <CrossmintButton />}
      {authenticated && <LogoutButton />}
    </div>
  )
}

export default TrailerButtons
