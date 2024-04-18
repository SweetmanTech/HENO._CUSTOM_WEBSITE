import { BigNumber, Contract } from "ethers"
import useConnectedWallet from "./useConnectedWallet"
import usePrivyEthersSigner from "./usePrivyEthersSigner"
import handleTxError from "@/lib/handleTxError"

const useWalletTransaction = () => {
  const { wallet } = useConnectedWallet()
  const { signer } = usePrivyEthersSigner()

  const sendTransaction = async (
    to,
    chainId: any,
    abi: any,
    functionName: string,
    args,
    value = BigNumber.from("0").toHexString(),
    gasLimit = 0,
  ) => {
    if (!wallet) return false

    try {
      const privyChainId = wallet.chainId
      if (privyChainId !== `eip155:${chainId}`) {
        await wallet.switchChain(chainId)
        return false
      }

      const contract = new Contract(to, abi, signer)
      if (signer) {
        const data = {
          value,
        } as any
        if (gasLimit) {
          data.gasLimit = gasLimit
        }
        const tx = await contract[functionName](...args, data)
        const txHash = tx.wait()
        return txHash
      }
      return false
    } catch (error) {
      handleTxError(error)
      return false
    }
  }

  return {
    sendTransaction,
  }
}

export default useWalletTransaction
