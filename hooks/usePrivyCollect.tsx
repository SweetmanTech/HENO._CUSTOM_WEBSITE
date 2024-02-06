import { useCollection } from "onchain-magic"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET } from "../lib/consts"
import usePrivyMulticall from "./usePrivyMulticall"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import _ from "lodash"

const usePrivyCollect = () => {
  const { prepare } = usePreparePrivyWallet()

  const onClick = async () => {
    if (!prepare()) return
  }

  return {
    onClick,
  }
}

export default usePrivyCollect
