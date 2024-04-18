import useCollect from "@/hooks/useCollect"
import usePrivyCollect from "@/hooks/usePrivyCollect"
import { useUserProvider } from "@/providers/UserProvider"
import { usePrivy } from "@privy-io/react-auth"

const CollectArbitrum = ({ className = "" }) => {
  const { login, authenticated } = usePrivy()
  const { onClick: collectWithWallet } = useCollect()
  const { onClick: collectWithPrivy } = usePrivyCollect()
  const { isLoggedByEmail } = useUserProvider()

  const handleClick = () => {
    if (!authenticated) {
      login()
      return
    }

    if (isLoggedByEmail) {
      collectWithPrivy()
      return
    }
    collectWithWallet()
  }

  return (
    <button type="button" className={`${className} bg-darkgray py-[3px]`} onClick={handleClick}>
      Collect
    </button>
  )
}

export default CollectArbitrum
