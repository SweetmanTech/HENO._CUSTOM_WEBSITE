import { getPublicClient } from "@/lib/clients"
import { zoraCreator1155ImplABI } from "@zoralabs/protocol-deployments"
import { Address } from "viem"

const getCollectionBalanceOf = async (
  collectionAddress: Address,
  chainId: number,
  address: Address,
) => {
  const publicClient = getPublicClient(chainId)
  const response: any = await publicClient.readContract({
    address: collectionAddress,
    abi: zoraCreator1155ImplABI,
    functionName: "nextTokenId",
  })

  const nextTokenId = parseInt(response.toString(), 10)
  const tokenIds = Array.from({ length: nextTokenId - 1 }, (_, i) => i + 1)
  const multicallCalls = tokenIds.map((tokenId) => ({
    address: collectionAddress,
    abi: zoraCreator1155ImplABI,
    functionName: "balanceOf",
    args: [address, tokenId],
  }))

  const results = await publicClient.multicall({
    contracts: multicallCalls as any,
  })

  return results
}

export default getCollectionBalanceOf
