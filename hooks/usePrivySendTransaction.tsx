import { BigNumber, Contract } from "ethers"
import { UnsignedTransactionRequest, usePrivy } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"
import useConnectedWallet from "./useConnectedWallet"
import usePrivyEthersSigner from "./usePrivyEthersSigner"
import { useUserProvider } from "@/providers/UserProvider"
import handleTxError from "@/lib/handleTxError"

const usePrivySendTransaction = () => {
  const { sendTransaction: privySendTransaction } = usePrivy()
  const { wallet } = useConnectedWallet()
  const { signer } = usePrivyEthersSigner()
  const { isLoggedByEmail } = useUserProvider()

  const sendTransactionByPrivy = async (
    to,
    chainId,
    abi,
    functionName,
    args,
    value = BigNumber.from("0").toHexString(),
    title = "",
    description = "",
    gasLimit = null,
  ) => {
    const data = new Interface(abi).encodeFunctionData(functionName, args)
    const unsignedTx = {
      to,
      chainId,
      data,
      value,
    } as UnsignedTransactionRequest
    if (gasLimit) {
      unsignedTx.gasLimit = gasLimit
    }

    const uiConfig = {
      header: title,
      description,
      buttonText: "Sign",
    }
    const txReceipt = await privySendTransaction(unsignedTx, uiConfig)
    return txReceipt.transactionHash
  }

  const sendTransactionByWallet = async (
    to,
    chainId: any,
    abi: any,
    functionName: string,
    args,
    value = BigNumber.from("0").toHexString(),
    gasLimit = 0,
  ) => {
    if (!wallet || !signer) return false

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
  }

  const sendTransaction = async (
    to,
    chainId,
    abi,
    functionName,
    args,
    value = BigNumber.from("0").toHexString(),
    title = "",
    description = "",
    gasLimit = null,
  ) => {
    try {
      if (isLoggedByEmail) {
        const response = await sendTransactionByPrivy(
          to,
          chainId,
          abi,
          functionName,
          args,
          value,
          title,
          description,
          gasLimit,
        )
        return response
      }
      const response = await sendTransactionByWallet(
        to,
        chainId,
        abi,
        functionName,
        args,
        value,
        gasLimit,
      )
      return response
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }
  return {
    sendTransaction,
  }
}

export default usePrivySendTransaction
