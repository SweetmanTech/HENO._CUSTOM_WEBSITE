import { useLogin, usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import handleTxError from "@/lib/handleTxError"
import { Address } from "viem"
import useMintPoints from "./useMintPoints"

const useVerifyMints = () => {
  const { authenticated, ready } = usePrivy()
  const { connectedWallet } = useConnectedWallet()
  const { updateMintPoints } = useMintPoints()

  const isAuthenticated = ready && authenticated && connectedWallet

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
      await updateMintPoints(connectedWallet as Address)
      // eslint-disable-next-line consistent-return
      return true
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
