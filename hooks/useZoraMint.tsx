import { BigNumber, Contract, utils } from "ethers"
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { toast } from "react-toastify"
import abi from "../lib/abi/zora-drop.json"
import { useEthersSigner } from "./useEthersSigner"
import handleTxError from "../lib/handleTxError"
import useCheckNetwork from "./useCheckNetwork"
import { CHAIN_ID } from "../lib/consts"

const useZoraMint = () => {
  const signer = useEthersSigner({ chainId: CHAIN_ID })
  const { checkNetwork } = useCheckNetwork()
  const { isConnected, address } = useAccount()
  const { openConnectModal } = useConnectModal()
  const mintWithRewards = async () => {
    const toastId = toast.info("Collecting...", {
      autoClose: false,
    })
    try {
      if (!isConnected) {
        openConnectModal()
        return false
      }
      if (!checkNetwork()) {
        return false
      }
      const quantity = 1
      const contract = new Contract(process.env.NEXT_PUBLIC_DROP_ADDRESS, abi, signer)
      const zoraFeeWei = "777000000000000"
      const comment = "!!!"
      const mintReferral = process.env.NEXT_PUBLIC_MINT_REFERRAL
      const minter = "0x04e2516a2c207e84a1839755675dfd8ef6302f0a"
      const tokenId = 1
      console.log("SWEETS ADDRESS", address)
      const minterArguments = utils.defaultAbiCoder.encode(
        ["address", "string"],
        [address, comment],
      )
      const tx = await contract.mintWithRewards(
        minter,
        tokenId,
        quantity,
        minterArguments,
        mintReferral,
        {
          value: zoraFeeWei,
          gasLimit: 300293,
        },
      )
      const receipt = await tx.wait()
      toast.update(toastId, {
        render: "Purchased",
        type: toast.TYPE.SUCCESS,
        autoClose: 3000,
      })
      return receipt
    } catch (err) {
      toast.dismiss()
      handleTxError({ message: "Mint failed!", error: err })
      return { err }
    }
  }

  return {
    mintWithRewards,
  }
}
export default useZoraMint
