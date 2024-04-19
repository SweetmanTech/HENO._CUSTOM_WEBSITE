import CollectArbitrum from "@/components/CollectArbitrum"
import CrossmintButton from "@/components/CrossmintButton"
import LogoutButton from "@/components/LogoutButton"
import { usePrivy } from "@privy-io/react-auth"

const TrailerButtons = () => {
  const { authenticated } = usePrivy()

  return (
    <div className="flex flex-col gap-1">
      <CollectArbitrum />
      {authenticated && <CrossmintButton />}
      {authenticated && <LogoutButton />}
    </div>
  )
}

export default TrailerButtons
