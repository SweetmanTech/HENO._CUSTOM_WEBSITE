import { useLogin, usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import handleTxError from "@/lib/handleTxError"
import { Address } from "viem"
import usePrivyWalletClient from "./usePrivyWalletClient"
import useMintPoints from "./useMintPoints"

const useVerifyMints = () => {
  const { authenticated, ready } = usePrivy()
  const { connectedWallet } = useConnectedWallet()
  const { updateMintPoints } = useMintPoints()

  const isAuthenticated = ready && authenticated && connectedWallet
  const { walletClient } = usePrivyWalletClient()

  const { login } = useLogin({
    onComplete: (wallets) => {
      const externalWallets = wallets.linkedAccounts?.filter(
        (wallet: any) => wallet?.walletClientType !== "privy",
      )
      const externalWallet: any = externalWallets?.length ? externalWallets[0] : null

      if (externalWallet) {
        updateMintPoints(externalWallet?.address as Address)
      }
    },
  })

  const verifyMints = async () => {
    try {
      if (!isAuthenticated) {
        login()
        return
      }
      if (!walletClient) return
      const verifyMintsSignature = await walletClient.signMessage({
        account: connectedWallet as Address,
        message: "Verify Mints",
      })
      await updateMintPoints(connectedWallet as Address)
      // eslint-disable-next-line consistent-return
      return verifyMintsSignature
    } catch (error) {
      handleTxError({ message: "Verify mints failed." })
      // eslint-disable-next-line consistent-return
      return false
    }
  }

  return {
    verifyMints,
  }
}

export default useVerifyMints
