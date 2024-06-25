import { useEffect, useState } from "react"
import { WalletClient, createWalletClient, custom, Chain, Address } from "viem"
import { CHAIN } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"

const usePrivyWalletClient = (chain: Chain = CHAIN) => {
  const { connectedWallet, wallet } = useConnectedWallet()
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null)

  useEffect(() => {
    const init = async () => {
      if (!wallet) return
      const provider = await wallet.getEthereumProvider()
      const response = createWalletClient({
        chain,
        account: connectedWallet as Address,
        transport: custom(provider),
      })

      setWalletClient(response)
    }

    if (!connectedWallet || !chain) return
    init()
  }, [connectedWallet, chain, wallet])

  return { walletClient }
}

export default usePrivyWalletClient
