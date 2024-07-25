import { COLLECTIONS } from "@/lib/consts"
import { Address } from "viem"
import getCollectionBalanceOf from "./getCollectionBalanceOf"
import get721BalanceOf from "./get721BalanceOf"

const getTotalPoints = async (address: Address) => {
  const balancesPromise = COLLECTIONS.map(async (collection) => {
    let result

    if (collection.type === "ERC1155") {
      result = await getCollectionBalanceOf(
        collection.collectionAddress as Address,
        collection.chain.id,
        address,
      )
      return result
    }

    result = await get721BalanceOf(
      collection.collectionAddress as Address,
      collection.chain.id,
      address,
    )
    return { result }
  })

  const balances = await Promise.all(balancesPromise)

  const formattedBalances = balances
    .flat()
    .map((balance: any) => parseInt(balance.result.toString(), 10))
  const points = formattedBalances.reduce((acc, num) => acc + num, 0) * 500

  return points
}

export default getTotalPoints
