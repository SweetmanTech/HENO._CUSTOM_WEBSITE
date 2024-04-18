import { ARBITRUM_DROP_ADDRESS, ARBITRUM_MINTER, IS_TESTNET } from "@/lib/consts"
import { toast } from "react-toastify"
import handleTxError from "@/lib/handleTxError"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import { arbitrum, arbitrumSepolia } from "viem/chains"
import abi from "@/lib/abi/zora-drop.json"
import { BigNumber } from "ethers"
import { ZORA_FEE } from "onchain-magic"
import { defaultAbiCoder } from "ethers/lib/utils"

const usePrivyCollect = () => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction } = usePrivySendTransaction()

  const onClick = async () => {
    try {
      if (!prepare()) return

      const totalFee = BigNumber.from(ZORA_FEE).toHexString()

      const minterArguments = defaultAbiCoder.encode(
        ["address", "string"],
        [connectedWallet, "!!!"],
      )

      await sendTransaction(
        ARBITRUM_DROP_ADDRESS,
        IS_TESTNET ? arbitrumSepolia.id : arbitrum.id,
        abi,
        "mintWithRewards",
        [ARBITRUM_MINTER, 1, 1, minterArguments, connectedWallet],
        totalFee,
        "HENO.WEB3",
        "COLLECT",
      )

      toast.success("collected!")
    } catch (error) {
      handleTxError(error)
    }
  }

  return {
    onClick,
  }
}

export default usePrivyCollect
