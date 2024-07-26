import { usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import handleTxError from "@/lib/handleTxError"
import { Address } from "viem"
import { useState } from "react"
import useMintPoints from "./useMintPoints"

const useVerifyMints = () => {
  const { authenticated, ready, login } = usePrivy()
  const { connectedWallet } = useConnectedWallet()
  const { updateMintPoints } = useMintPoints()
  const [verifyingMint, setVerifyingMint] = useState(false)

  const isAuthenticated = ready && authenticated && connectedWallet

  const verifyMints = async () => {
    try {
      setVerifyingMint(true)
      if (!isAuthenticated) {
        login()
        setVerifyingMint(false)
        return true
      }
      await updateMintPoints(connectedWallet as Address)
      // eslint-disable-next-line consistent-return
      setVerifyingMint(false)
      return true
    } catch (error) {
      setVerifyingMint(false)
      handleTxError({ message: "Verify mints failed." })
      // eslint-disable-next-line consistent-return
      return false
    }
  }

  return {
    verifyMints,
    verifyingMint,
  }
}

export default useVerifyMints
