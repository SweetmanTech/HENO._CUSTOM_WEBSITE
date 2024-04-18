import { useConnectModal } from "@rainbow-me/rainbowkit"
import { ZORA_FEE, useEthersSigner } from "onchain-magic"
import useCheckNetwork from "@/hooks/useCheckNetwork"
import { toast } from "react-toastify"
import { ARBITRUM_DROP_ADDRESS, ARBITRUM_MINTER } from "@/lib/consts"
import { arbitrumSepolia } from "viem/chains"
import { BigNumber, Contract } from "ethers"
import abi from "@/lib/abi/zora-drop.json"
import { useAccount } from "wagmi"
import { defaultAbiCoder } from "ethers/lib/utils"

const useCollect = () => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { checkNetwork } = useCheckNetwork()
  const { address } = useAccount()

  const onClick = async () => {
    if (!signer) {
      openConnectModal()
      return false
    }
    if (!checkNetwork(arbitrumSepolia.id)) {
      return false
    }

    const minterArguments = defaultAbiCoder.encode(["address", "string"], [address, "!!!"])

    const totalFee = BigNumber.from(ZORA_FEE)
    const contract = new Contract(ARBITRUM_DROP_ADDRESS, abi, signer)
    const tx = await contract.mintWithRewards(ARBITRUM_MINTER, 1, 1, minterArguments, address, {
      value: totalFee,
    })

    const response = await tx.wait()
    toast.success("collected!")
    return response
  }

  return {
    onClick,
  }
}

export default useCollect
