import { useUserProvider } from "@/providers/UserProvider"
import { useWallets } from "@privy-io/react-auth"

const useConnectedWallet = () => {
  const { wallets } = useWallets()
  const { privyEmail } = useUserProvider()
  const privyWallet = wallets?.find((wallet) => wallet.walletClientType === "privy")
  const metamaskWallet = wallets?.find((wallet) => wallet.walletClientType === "metamask")
  const connectedWallet = privyEmail ? privyWallet?.address : metamaskWallet?.address

  return { connectedWallet, privyWallet, metamaskWallet }
}

export default useConnectedWallet
