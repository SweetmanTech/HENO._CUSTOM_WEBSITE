import { Address } from "viem"
import erc721Abi from "@/lib/abi/abi-ERC721Drop.json"
import { getPublicClient } from "./clients"

const get721BalanceOf = async (dropAddress: Address, chainId: number, address: Address) => {
  const publicClient = getPublicClient(chainId)
  const response = await publicClient.readContract({
    address: dropAddress,
    abi: erc721Abi,
    functionName: "balanceOf",
    args: [address],
  })

  return response
}

export default get721BalanceOf
