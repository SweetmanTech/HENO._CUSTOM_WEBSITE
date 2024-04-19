import { useEffect, useState } from "react"
import useConnectedWallet from "./useConnectedWallet"

const usePrivyEthersSigner = () => {
  const { wallet } = useConnectedWallet()
  const [signer, setSigner] = useState(null)

  useEffect(() => {
    const init = async () => {
      const provider = await wallet.getEthersProvider()
      const ethSigner = provider.getSigner()
      setSigner(ethSigner)
    }

    if (!wallet) return
    init()
  }, [wallet])

  return { signer }
}

export default usePrivyEthersSigner
