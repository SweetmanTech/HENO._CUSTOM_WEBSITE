import { useEffect, useState } from "react"
import { zoraCreatorFixedPriceSaleStrategyAddress } from "@zoralabs/protocol-deployments"
import getNFTsForContract from "@/lib/alchemy/getNftsForContract"
import getFormattedDrops from "@/lib/getFormattedDrops"
import useZoraFixedPriceSaleStrategy from "./useZoraFixedPriceSaleStrategy"

type UseCollectionParams = {
  collectionAddress: string
  chainId: number
  minterOverride?: string
}

const useCollection = ({ collectionAddress, chainId, minterOverride }: UseCollectionParams) => {
  const [drops, setDrops] = useState([] as any)
  const minter =
    minterOverride ||
    zoraCreatorFixedPriceSaleStrategyAddress[
      chainId as keyof typeof zoraCreatorFixedPriceSaleStrategyAddress
    ]
  const { priceValues, sale } = useZoraFixedPriceSaleStrategy({
    saleConfig: minter,
    drops,
    chainId,
  })

  useEffect(() => {
    const init = async () => {
      if (!collectionAddress) return
      const response = await getNFTsForContract(collectionAddress, chainId)
      const formattedDrops = getFormattedDrops(response.nfts, chainId)
      setDrops(formattedDrops)
    }

    init()
  }, [collectionAddress, chainId])

  return {
    drops,
    priceValues,
    sale,
  }
}

export default useCollection
