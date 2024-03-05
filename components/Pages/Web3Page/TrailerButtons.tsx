import CollectAllButton from "@/components/CollectAllButton"
import CrossmintButton from "@/components/CrossmintButton"
import LogoutButton from "@/components/LogoutButton"
import { usePrivy } from "@privy-io/react-auth"

const TrailerButtons = () => {
  const { authenticated } = usePrivy()

  return (
    <div className="flex flex-col gap-3">
      <CollectAllButton />
      {authenticated && <CrossmintButton />}
      {authenticated && <LogoutButton />}
    </div>
  )
}

export default TrailerButtons
