import { COLLECTIONS } from "@/lib/consts"
import { Address } from "viem"
import getCollectionBalanceOf from "./getCollectionBalanceOf"

const getTotalPoints = async (address: Address) => {
  const balancesPromise = COLLECTIONS.map(async (collection) => {
    const result = await getCollectionBalanceOf(
      collection.collectionAddress as Address,
      collection.chain.id,
      address,
    )
    return result
  })

  const balances = await Promise.all(balancesPromise)
  const formattedBalances = balances
    .flat()
    .map((balance: any) => parseInt(balance.result.toString(), 10))
  const points = formattedBalances.reduce((acc, num) => acc + num, 0) * 500

  return points
}

export default getTotalPoints
