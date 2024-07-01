import { COLLECTIONS } from "@/lib/consts"
import { getPublicClient } from "@/lib/clients"
import zora1155Abi from "@/lib/abi/zora-drop.json"
import { Address } from "viem"

const getTotalPoints = async (address: Address) => {
  const balancesPromise = COLLECTIONS.map(async (collection) => {
    const publicClient = getPublicClient(collection.chain.id as number)
    const response: any = await publicClient.readContract({
      address: collection.collectionAddress as Address,
      abi: zora1155Abi,
      functionName: "nextTokenId",
    })

    const nextTokenId = parseInt(response.toString(), 10)
    const tokenIds = Array.from({ length: nextTokenId - 1 }, (_, i) => i + 1)
    const multicallCalls = tokenIds.map((tokenId) => ({
      address: collection.collectionAddress as Address,
      abi: zora1155Abi,
      functionName: "balanceOf",
      args: [address, tokenId],
    }))

    const results = await publicClient.multicall({
      contracts: multicallCalls as any,
    })

    return results
  })

  const balances = await Promise.all(balancesPromise)
  const formattedBalances = balances
    .flat()
    .map((balance: any) => parseInt(balance.result.toString(), 10))
  const points = formattedBalances.reduce((acc, num) => acc + num, 0) * 500

  return points
}

export default getTotalPoints
