import { Contract } from "ethers"
import { useCallback, useEffect, useMemo, useState } from "react"
import abi from "@/lib/abi/ZoraCreatorFixedPriceSaleStrategy.json"
import getDefaultProvider from "@/lib/getDefaultProvider"
import { CHAIN_ID, ZORA_FEE } from "@/lib/consts"

type UseZoraFixedPriceSaleStrategyParams = {
  saleConfig: string
  drops: any[]
  chainId?: number
}

const useZoraFixedPriceSaleStrategy = ({
  saleConfig,
  drops,
  chainId = CHAIN_ID,
}: UseZoraFixedPriceSaleStrategyParams) => {
  const [priceValues, setPriceValues] = useState([] as string[])
  const saleConfigContract = useMemo(
    () => saleConfig && new Contract(saleConfig, abi, getDefaultProvider(chainId)),
    [saleConfig, chainId],
  )

  const sale = useCallback(
    async (tokenContract: string, tokenId: string) => {
      try {
        if (!saleConfigContract) return false
        const response = await saleConfigContract.sale(tokenContract, tokenId)
        return response
      } catch (error) {
        return { error }
      }
    },
    [saleConfigContract],
  )

  useEffect(() => {
    const getValues = async () => {
      if (drops.length === 0) return
      const pricesPromises = drops.map((drop: any) => sale(drop.contractAddress, drop.tokenId))
      const prices = await Promise.all(pricesPromises)
      const values = prices.map((price) => price.pricePerToken.add(ZORA_FEE).toString())
      setPriceValues(values)
    }

    getValues()
  }, [drops, sale])

  return { sale, priceValues }
}

export default useZoraFixedPriceSaleStrategy
