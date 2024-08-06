import { Contract } from "ethers"
import {
  zoraCreatorFixedPriceSaleStrategyABI,
  zoraCreatorFixedPriceSaleStrategyAddress,
} from "@zoralabs/protocol-deployments"
import getDefaultProvider from "./getDefaultProvider"

const get1155SaleStatus = async (collectionAddress, tokenId, chainId) => {
  try {
    const fixedPriceSaleStrategry = new Contract(
      zoraCreatorFixedPriceSaleStrategyAddress[chainId],
      zoraCreatorFixedPriceSaleStrategyABI,
      getDefaultProvider(chainId),
    )
    const saleDetails = await fixedPriceSaleStrategry.sale(collectionAddress, tokenId)

    return saleDetails
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return null
  }
}

export default get1155SaleStatus
