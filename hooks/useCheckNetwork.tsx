import { useNetwork, useSwitchNetwork } from "wagmi"
import { useCallback } from "react"
import { CHAIN_ID } from "../lib/consts"

function useCheckNetwork() {
  const { chain: activeChain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const checkNetwork = useCallback(
    (chainId = CHAIN_ID as any) => {
      if (!chainId) return
      if (activeChain?.id !== chainId) {
        switchNetwork(chainId)
        return false
      }

      return true
    },
    [switchNetwork, activeChain],
  )

  return {
    checkNetwork,
  }
}

export default useCheckNetwork
